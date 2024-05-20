import { FaStar } from "react-icons/fa";
import "./Home.css";

const BestSeller = () => {
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
              BEST
            </span>
            <h2 className="Noto mt-2 text-2xl font-semibold md:text-5xl md:leading-tight">
              Best Seller
            </h2>
            <p className="mt-2.5 text-gray-600 dark:text-neutral-400">
              See how game-changing companies are making the most of every
              engagement with Preline.
            </p>
          </div>

          {/* DATA */}
          <div className="data">
            <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
              {/* CARD 1 */}
              <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
                <img
                  className="object-cover w-full h-56"
                  src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/product-clearview2-300x300.jpg?v=1714171786"
                  alt="products"
                />

                <div className="py-5 text-center">
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">
                    Crystal Wave
                  </h3>

                  <div className="mb-2 flex items-center justify-center gap-0.5">
                    <FaStar className="text-[#DEC344]" />
                    <FaStar className="text-[#DEC344]" />
                    <FaStar className="text-[#DEC344]" />
                    <FaStar className="text-[#DEC344]" />
                    <FaStar className="text-[#DEC344]" />
                  </div>

                  <p className="mb-3 text-xl font-semibold text-red-500">$49</p>

                  <button className="text-sm px-5 py-2 bg-black text-white font-semibold">
                    Add To Cart
                  </button>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
                <img
                  className="object-cover w-full h-56"
                  src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/product-clearview3-300x300.jpg?v=1714171786"
                  alt="products"
                />

                <div className="py-5 text-center">
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">
                    Crystal Wave
                  </h3>

                  <div className="mb-2 flex items-center justify-center gap-0.5">
                    <FaStar className="text-[#DEC344]" />
                    <FaStar className="text-[#DEC344]" />
                    <FaStar className="text-[#DEC344]" />
                    <FaStar className="text-[#DEC344]" />
                    <FaStar className="text-[#DEC344]" />
                  </div>

                  <p className="mb-3 text-xl font-semibold text-red-500">$49</p>

                  <button className="text-sm px-5 py-2 bg-black text-white font-semibold">
                    Add To Cart
                  </button>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
                <img
                  className="object-cover w-full h-56"
                  src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/product-clearview4-300x300.jpg?v=1714171785"
                  alt="products"
                />

                <div className="py-5 text-center">
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">
                    Crystal Wave
                  </h3>

                  <div className="mb-2 flex items-center justify-center gap-0.5">
                    <FaStar className="text-[#DEC344]" />
                    <FaStar className="text-[#DEC344]" />
                    <FaStar className="text-[#DEC344]" />
                    <FaStar className="text-[#DEC344]" />
                    <FaStar className="text-[#DEC344]" />
                  </div>

                  <p className="mb-3 text-xl font-semibold text-red-500">$49</p>

                  <button className="text-sm px-5 py-2 bg-black text-white font-semibold">
                    Add To Cart
                  </button>
                </div>
              </div>

              {/* CARD 4 */}
              <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
                <img
                  className="object-cover w-full h-56"
                  src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/product-clearview11-300x300.jpg?v=1714171786"
                  alt="products"
                />

                <div className="py-5 text-center">
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">
                    Crystal Wave
                  </h3>

                  <div className="mb-2 flex items-center justify-center gap-0.5">
                    <FaStar className="text-[#DEC344]" />
                    <FaStar className="text-[#DEC344]" />
                    <FaStar className="text-[#DEC344]" />
                    <FaStar className="text-[#DEC344]" />
                    <FaStar className="text-[#DEC344]" />
                  </div>

                  <p className="mb-3 text-xl font-semibold text-red-500">$49</p>

                  <button className="text-sm px-5 py-2 bg-black text-white font-semibold">
                    Add To Cart
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

export default BestSeller;
