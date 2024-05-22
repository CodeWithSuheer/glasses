import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";
import "../../components/Header.css";
import "./Home.css";

const HeroSection = () => {
  return (
    <>
      <section className="heroSectionbg min-h-[120vh] ">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl px-4 sm:px-16 lg:px-14 xl:px-0 pt-24 pb-0 lg:pt-24 lg:pb-0 mx-auto">
          <div className="items-center lg:flex lg:min-h-screen">
            <div className="w-full pt-0 sm:pt-0 lg:pt-0 lg:w-1/2">
              <div className="lg:max-w-xl">
                <span
                  style={{ letterSpacing: "4px" }}
                  className="py-1 px-1.5 font-medium text-black bg-[#DEC344] text-[11px] lg:text-[13px]"
                >
                  NEW ARRIVAL
                </span>

                <h2 className="Noto max-w-sm mt-4 mb-6 text-5xl sm:text-7xl xl:text-8xl font-medium text-white tracking-normal">
                  ClearView Eyeglasses Frames
                </h2>
                <p className="pr-12 sm:pr-0 mb-10 text-lg sm:text-xl sm:max-w-md text-white">
                  Lacus egestas enim quis risus nullamib cursus fermentum
                  viverra tellus condimentum
                </p>

                {/* BUTTON BAR */}
                <div className="button_bar block sm:flex items-center flex-col sm:flex-row gap-6 md:gap-8">
                  <Link
                    to="/shop"
                    className="text-white flex items-center gap-2 text-lg font-medium bg-black px-8 py-4"
                  >
                    <span>Shop Now</span>
                    <IoIosArrowForward className="mt-0.5 font-bold" size={17} />
                  </Link>

                  {/* <button className="mt-5 sm:mt-0 text-white border border-white flex items-center gap-2 text-lg font-medium bg-transparent px-8 py-4">
                    <span>Shop Sunglasses</span>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
