import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  const handleMoveToTop = () => {
    window.scroll(0, 0);
  };

  return (
    <>
      <footer className="w-full bg-[#F3F4F6] text-black">
        <div className="max-w-7xl mx-auto">
          {/* FOOTER UPPER PART  */}
          <div className="pt-20 pb-16 px-4 md:px-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-5">
            {/* LOGO & HEADING */}
            <div className="sm:col-span-2">
              <h1 className="max-w-lg flex items-center text-xl font-semibold tracking-tight text-black xl:text-2xl">
                <img className="w-auto h-16" src={logo} alt="logo" />
              </h1>
              <p className="max-w-md text-[1rem] mt-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                molestiae nostrum totam et iusto nisi sequi qui odio! Non
                tempore sit est quas vero accusamus cum necessitatibus nesciunt
                animi expedita et iusto nisi seq olor sit, amet con.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <p className="text-xl font-semibold text-black">Quick Link</p>
              <div className="flex flex-col items-start mt-3 space-y-2">
                <Link
                  to="/"
                  onClick={handleMoveToTop}
                  className="text-black transition-colors duration-300 hover:underline hover:text-blue-500"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  onClick={handleMoveToTop}
                  className="text-black transition-colors duration-300 hover:underline hover:text-blue-500"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  onClick={handleMoveToTop}
                  className="text-black transition-colors duration-300 hover:underline hover:text-blue-500"
                >
                  Contact Us
                </Link>
                <Link
                  to="/privacy-policy"
                  onClick={handleMoveToTop}
                  className="text-black transition-colors duration-300 hover:underline hover:text-blue-500"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>

            {/* SHOP */}
            <div>
              <p className="text-xl font-semibold text-black">Products</p>
              <div className="flex flex-col items-start mt-3 space-y-2">
                <Link
                  to="/shop"
                  onClick={handleMoveToTop}
                  className="text-black transition-colors duration-300 hover:underline hover:text-blue-500"
                >
                  Shop
                </Link>
                <Link
                  to="/shop"
                  onClick={handleMoveToTop}
                  className="text-black transition-colors duration-300 hover:underline hover:text-blue-500"
                >
                  Mens
                </Link>
                <Link
                  to="/shop"
                  onClick={handleMoveToTop}
                  className="text-black transition-colors duration-300 hover:underline hover:text-blue-500"
                >
                  Women
                </Link>
              </div>
            </div>

            {/* PRODUCT & CATEGORIES */}
            <div>
              <p className="text-xl font-semibold text-black">Contact Info</p>
              <div className="flex flex-col items-start mt-3 space-y-2">
                {/* PHONE NUMBER */}
                <a
                  href="tel:+92 310 5015888"
                  className="flex items-center gap-2"
                >
                  <FaPhone /> +92 310 5015888
                </a>

                {/* SOCIAL LINKS */}
                <div className="links pt-2 flex items-center justify-start gap-2.5">
                  <a href="#" className="">
                    <FaFacebookF className="text-white bg-[#3c3b3b] h-7 w-7 p-1.5 rounded-full" />
                  </a>
                  <a href="#" className="">
                    <FaInstagram className="text-white bg-[#3c3b3b] h-7 w-7 p-1.5 rounded-full" />
                  </a>
                  <a href="#" className="">
                    <FaLinkedinIn className="text-white bg-[#3c3b3b] h-7 w-7 p-1.5 rounded-full" />
                  </a>
                  <a href="#" className="">
                    <FaTiktok className="text-white bg-[#3c3b3b] h-7 w-7 p-1.5 rounded-full" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM PART  */}
        <div className="text-sm py-5 px-4 md:px-10 border-t bg-[#3c3b3b] text-center text-white">
          <p>Copyrights © 2024 All Rights Reserved by Googly</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
