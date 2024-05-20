import { IoIosArrowForward } from "react-icons/io";
import "./Home.css";

const HomeCategories = () => {
  return (
    <>
      <section className="w-full pt-20 pb-10">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="header text-center">
            <span
              style={{ letterSpacing: "4px" }}
              className="py-1 px-1.5 font-medium text-black bg-[#DEC344] text-[11px] lg:text-[13px]"
            >
              CATEGORY
            </span>
            <h2 className="Noto mt-2 text-2xl font-semibold md:text-5xl md:leading-tight">
              Shop By Categories
            </h2>
            <p className="mt-2.5 text-gray-600 dark:text-neutral-400">
              See how game-changing companies are making the most of every
              engagement with Preline.
            </p>
          </div>

          {/* DATA */}
          <div className="data">
            <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
              {/* CARD 1 */}
              <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                <img
                  alt=""
                  src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/category1-womens.jpg?v=1714169511"
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
              </article>

              {/* CARD 2 */}
              <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                <img
                  alt=""
                  src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/category2-mens.jpg?v=1714169511"
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
              </article>

              {/* CARD 3 */}
              <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                <img
                  alt=""
                  src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/category3-prescription.jpg?v=1714169511"
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
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCategories;
