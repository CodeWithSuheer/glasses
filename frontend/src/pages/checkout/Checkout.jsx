import { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart, totalPrice, totalQuantity } = useSelector(
    (state) => state.action
  );

  const shippingCharges = 300;

  return (
    <>
      <section className="selectedSectionbg">
        <div className="px-5 md:px-7 xl:px-0 max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <div className="pt-24 lg:pt-10 grid place grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 min-h-[65vh]">
            {/* LEFT SIDE */}
            <div className="flex items-end lg:items-center justify-center lg:justify-start">
              <div className="content text-center lg:text-start">
                <span
                  style={{ letterSpacing: "4px" }}
                  className="py-1 px-1.5 font-medium text-black bg-[#DEC344] text-[11px] lg:text-[13px]"
                >
                  CHECKOUT
                </span>

                <h2 className="Noto mt-4 mb-6 text-4xl md:text-5xl font-medium text-white tracking-normal">
                  Checkout
                </h2>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-start lg:items-center justify-center lg:justify-end">
              <h2 className="mt-6 flex items-center gap-2 text-left font-normal text-white text-md md:text-lg">
                <Link
                  to="/"
                  className="flex items-center gap-1 hover:underline hover:underline-offset-4"
                >
                  <FaHome />
                  Home
                </Link>{" "}
                <IoIosArrowForward />
                <Link
                  to="/cart"
                  className="flex items-center gap-1 hover:underline hover:underline-offset-4"
                >
                  Cart
                </Link>{" "}
                <IoIosArrowForward /> Checkout
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white p-4">
        <div className="xl:max-w-5xl lg:max-w-5xl max-w-xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 max-lg:order-1">
              <h2 className="text-3xl font-extrabold text-[#333]">Checkout</h2>
              <p className="text-[#333] text-base mt-5 max-w-lg">
                Complete your transaction swiftly and securely with our
                easy-to-use payment process.
              </p>

              <form className="mt-5 max-w-lg">
                <div className="mb-3">
                  <input
                    type="number"
                    placeholder="Enter Phone Number"
                    className="px-4 py-3 bg-gray-100 text-[#333] w-full text-md border rounded-md border-gray-500 focus:border-gray-800 outline-none placeholder:text-gray-500 transition-shadow duration-200 focus:shadow-xl"
                  />
                </div>

                <textarea
                  rows={6}
                  name="address"
                  placeholder="Enter Shipping Address"
                  className="px-4 py-3 bg-gray-100 text-[#333] w-full text-md border rounded-md border-gray-500 focus:border-gray-800 outline-none placeholder:text-gray-500 transition-shadow duration-200 focus:shadow-xl"
                  required
                ></textarea>

                <div className="buttons">
                  <button
                    type="button"
                    className="mt-5 w-full py-3 text-md text-white hover:bg-black bg-[#252525]"
                  >
                    Order Now
                  </button>
                </div>
              </form>
            </div>

            {/* AMOUNT DETAILS */}
            <div className="bg-gray-100 shadow-xl border border-gray-300 h-[17rem] p-6 rounded-md">
              <h2 className="text-4xl font-extrabold text-[#333]">
                Rs {totalPrice + shippingCharges}
              </h2>
              <ul className="text-[#333] mt-10 space-y-6">
                <li className="flex flex-wrap gap-4 text-base">
                  Subtotal{" "}
                  <span className="ml-auto font-bold">Rs {totalPrice}</span>
                </li>
                <li className="flex flex-wrap gap-4 text-base">
                  Shipping Charges{" "}
                  <span className="ml-auto font-bold">
                    Rs {shippingCharges}
                  </span>
                </li>
                <li className="flex flex-wrap gap-4 text-base font-bold border-t-2 pt-4">
                  Total{" "}
                  <span className="ml-auto">
                    Rs {totalPrice + shippingCharges}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
