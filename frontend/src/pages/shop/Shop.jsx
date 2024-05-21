import { IoIosArrowForward } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Shop.css";
import BestSeller from "../home/BestSeller";
import PopularProducts from "../home/PopularProducts";
import AllProducts from "./AllProducts";

const Shop = () => {
  return (
    <>
      <section className="shopSectionbg ">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <div className="pt-10 grid place grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 min-h-[65vh]">
            {/* LEFT SIDE */}
            <div className="flex items-center">
              <div className="content">
                <span
                  style={{ letterSpacing: "4px" }}
                  className="py-1 px-1.5 font-medium text-black bg-[#DEC344] text-[11px] lg:text-[13px]"
                >
                  SHOP
                </span>

                <h2 className="Noto max-w-sm mt-4 mb-6 text-6xl font-medium text-white tracking-normal">
                  Shop
                </h2>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center justify-end">
              <h2 className="mt-12 flex items-center gap-2 text-left font-semibold text-white text-xl">
                <Link to="/" className="flex items-center gap-2">
                  <FaHome />
                  Home
                </Link>{" "}
                <IoIosArrowForward /> Shop
              </h2>
            </div>
          </div>
        </div>
      </section>

      <AllProducts />

      <BestSeller />

      <PopularProducts />
    </>
  );
};

export default Shop;
