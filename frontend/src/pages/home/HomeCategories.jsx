import { IoIosArrowForward } from "react-icons/io";
import "./Home.css";
import { Link } from "react-router-dom";

const HomeCategories = () => {
  const handleMoveTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="w-full pt-20 pb-10 px-4 xl:px-0">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="header text-center">
            <span
              style={{ letterSpacing: "4px" }}
              className="py-1 px-1.5 font-medium text-black bg-[#DEC344] text-[11px] lg:text-[13px]"
            >
              CATEGORY
            </span>
            <h2 className="Noto mt-2 text-2xl font-semibold md:text-4xl lg:text-5xl md:leading-tight">
              Shop By Categories
            </h2>
            <p className="mt-3 text-gray-800">
              Explore curated categories for the latest trends and timeless
              classics.
            </p>
          </div>

          {/* DATA */}
          <div className="data">
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
              {/* CARD 1 */}
              <Link
                to="/shop"
                onClick={handleMoveTop}
                className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg"
              >
                <img
                  alt="category"
                  src="https://firebasestorage.googleapis.com/v0/b/it-expert-d4328.appspot.com/o/Googly%20Banners%2FFemale%20Category.png?alt=media&token=be834710-4d02-47fc-b3a4-bcb9c89056e4"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="relative bg-gradient-to-t from-gray-900/50 to-transparent pt-32 sm:pt-48 lg:pt-64">
                  <div className="p-4 sm:p-6">
                    <a href="#">
                      <h3 className="mt-0.5 mb-3 max-w-[10rem] text-3xl font-semibold text-white">
                        Women’s Eyewear
                      </h3>

                      <button className="text-lg flex items-center gap-1 font-semibold text-[#e2cc52]">
                        Shop Now
                        <IoIosArrowForward className="font-bold" size={17} />
                      </button>
                    </a>
                  </div>
                </div>
              </Link>

              {/* CARD 2 */}
              <Link
                to="/shop"
                onClick={handleMoveTop}
                className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg"
              >
                <img
                  alt=""
                  src="https://firebasestorage.googleapis.com/v0/b/it-expert-d4328.appspot.com/o/Googly%20Banners%2FMale%20Category.png?alt=media&token=e565098b-25b0-46f1-bc0f-e48c6ea76eb6"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="relative bg-gradient-to-t from-gray-900/50 to-transparent pt-32 sm:pt-48 lg:pt-64">
                  <div className="p-4 sm:p-6">
                    <h3 className="mt-0.5 mb-3 max-w-[10rem] text-3xl font-semibold text-white">
                      Men’s Eyewear
                    </h3>

                    <button className="text-lg flex items-center gap-1 font-semibold text-[#e2cc52]">
                      Shop Now
                      <IoIosArrowForward className="font-bold" size={17} />
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCategories;
