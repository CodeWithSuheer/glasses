import { IoIosArrowForward } from "react-icons/io";
import "./Home.css";

const HeroSection = () => {
  return (
    <>
      <section className="heroSectionbg min-h-[120vh]">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl px-4 sm:px-16 lg:px-14 xl:px-0 pt-24 pb-0 lg:pt-7 lg:pb-0 mx-auto">
          <div className="items-center lg:flex lg:min-h-screen">
            <div className="w-full pt-3 sm:pt-0 lg:w-1/2">
              <div className="lg:max-w-xl">
                <span
                  style={{ letterSpacing: "4px" }}
                  className="py-1 px-1.5 font-medium text-black bg-[#DEC344] lg:text-[13px]"
                >
                  NEW ARRIVAL
                </span>

                <h2 className="mt-3 mb-6 text-8xl font-semibold">
                  ClearView Eyeglasses Frames
                </h2>
                <p className=" mb-10 text-xl max-w-md">
                  Lacus egestas enim quis risus nullamib cursus fermentum
                  viverra tellus condimentum
                </p>

                <div className="button_bar flex items-center gap-8">
                  <button className="text-white flex items-center gap-2 text-lg font-medium bg-black px-8 py-4">
                    <span>Shop Now</span>
                    <IoIosArrowForward className="mt-0.5 font-bold" size={17} />
                  </button>

                  <button className="text-white border border-white flex items-center gap-2 text-lg font-medium bg-transparent px-8 py-4">
                    <span>Shop Now</span>
                    <IoIosArrowForward className="mt-0.5 font-bold" size={17} />
                  </button>
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
