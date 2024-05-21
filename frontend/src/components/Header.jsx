import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";
import "./Header.css";

const Header = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const navigate = useNavigate();
  const [state, setState] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Shop", path: "/shop" },
    { title: "Blog", path: "/blogs" },
  ];

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropDownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    window.scroll(0, 0);
  };

  return (
    <>
      {/* {!isHomePage && ( */}
      <nav
        className={`navbar absolute top-0 w-full py-0 border-b bg-transparent border-[#A4A3A2] transition-all `}
      >
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl px-3 sm:px-6 xl:px-0 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between ">
            <div className="flex items-center justify-between border-0 lg:border-r border-[#A4A3A2] py-6">
              {/* -------------- BRAND LOGO -------------- */}
              <Link
                to="/"
                onClick={handleLinkClick}
                className="flex items-center gap-0.5 md:pr-8"
              >
                {/* <img
                  className="w-auto h-10 sm:h-12"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Untitled_design.png?v=1713204274"
                  alt="Octa Tech Solution LLC Logo"
                /> */}
                <h2 className="text-xl mt-1 text-white ml-2 sm:text-3xl font-semibold">
                  Googly
                </h2>
              </Link>

              {/* -------------- HAMBURGER BUTTON FOR MOBILE VIEW -------------- */}
              <div className="flex lg:hidden">
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="text-gray-100  hover:text-gray-600 focus:outline-none focus:text-gray-600"
                  aria-label="toggle menu"
                >
                  {isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="28"
                      height="28"
                      fill="currentColor"
                    >
                      <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="currentColor"
                    >
                      <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* -------------- MENU FOR LARGE VIEW -------------- */}
            <div className="hidden lg:flex lg:items-center">
              {navigation.map((data, index) => (
                <Link
                  key={index}
                  to={data.path}
                  onClick={() => window.scroll(0, 0)}
                  className="button_navbar poppin px-0 pt-2 pb-0.5 mx-4 sm:mx-2 md:mx-6 xl:mx-6 text-lg font-medium tracking-wide text-white rounded-xl"
                >
                  {data.title}
                </Link>
              ))}

              {/* CART & SEARCH */}
              <div className="cart_search flex ml-3 pl-3 py-7 items-center border-l border-[#A4A3A2]">
                {/* SEARCH */}
                <Link
                  to="/blog"
                  onClick={() => window.scroll(0, 0)}
                  className="px-0 pt-2 pb-0.5 mx-4 sm:mx-2 md:mx-4 xl:mx-4 text-lg font-medium tracking-wide text-white rounded-xl"
                >
                  <IoSearchOutline size={22} />
                </Link>

                {/* CART */}
                <Link
                  to="/cart"
                  onClick={() => window.scroll(0, 0)}
                  className="px-0 pt-2 pb-0.5 mx-4 sm:mx-2 md:mx-4 xl:mx-4 text-lg font-medium tracking-wide text-white rounded-xl"
                >
                  <BsHandbag size={22} />
                </Link>
              </div>
            </div>
          </div>

          {/* -------------- MENU FOR MOBILE VIEW -------------- */}
          <div
            className={`lg:hidden ${
              isOpen ? "block" : "hidden"
            } absolute inset-x-0 w-full mt-2 px-6 py-4 transition-all duration-300 ease-in-out bg-white lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              <Link
                to="/services"
                onClick={handleLinkClick}
                className="poppin px-0 pt-6 pb-1 mx-4 xl:mx-6 text-lg border-b border-gray-500 font-medium tracking-wide text-gray-700"
              >
                Services
              </Link>
              <Link
                to="/industries"
                onClick={handleLinkClick}
                className="poppin px-0 pt-6 pb-1 mx-4 xl:mx-6 text-lg border-b border-gray-500 font-medium tracking-wide text-gray-700"
              >
                Industries
              </Link>
              <Link
                to="/blog"
                onClick={handleLinkClick}
                className="poppin px-0 pt-6 pb-1 mx-4 xl:mx-6 text-lg border-b border-gray-500 font-medium tracking-wide text-gray-700"
              >
                Blog
              </Link>
              <Link
                to="/about"
                onClick={() => window.scroll(0, 0)}
                className="poppin px-0 pt-6 pb-1 mx-4 xl:mx-6 text-lg border-b border-gray-500 font-medium tracking-wide text-gray-700"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="poppin px-0 pt-6 pb-1 mx-4 xl:mx-6 text-lg border-b border-gray-500 font-medium tracking-wide text-gray-700"
              >
                Contact Us
              </Link>
              <a
                href="tel:+1-281-607-5120"
                className="poppin px-0 pt-6 pb-1 mx-4 xl:mx-6 text-md flex items-center gap-2 font-medium text-gray-700 cursor-pointer"
              >
                <FaPhoneAlt className="text-blue-600" />{" "}
                <span>+1 (281) 607-5120</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* )} */}
    </>
  );
};

export default Header;
