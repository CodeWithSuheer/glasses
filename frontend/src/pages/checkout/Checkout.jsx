import { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const { cart, totalPrice } = useSelector((state) => state.action);

  const user = useSelector((state) => state.auth.user);

  // CHECKING USER
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [cart, navigate, user]);

  const shippingCharges = 300;

  return (
    <>
      <section className="pt-10 bg-white p-4">
        <div className="xl:max-w-5xl lg:max-w-5xl max-w-xl mx-auto min-h-screen flex items-center">
          <div className="grid lg:grid-cols-3 gap-8 w-full">
            <div className="lg:col-span-2 max-lg:order-1">
              <h2 className="Noto text-3xl font-bold text-[#333]">Checkout</h2>
              <p className="text-[#333] text-base mt-5 max-w-lg">
                Complete your transaction swiftly and securely with our
                easy-to-use payment process.
              </p>

              <form className="mt-5 max-w-lg">
                <div className="mb-3 grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <input
                    type="number"
                    placeholder="Enter Phone Number"
                    className="px-4 py-3 bg-gray-100 text-[#333] w-full text-md border rounded-md border-gray-500 focus:border-gray-800 outline-none placeholder:text-gray-500 transition-shadow duration-200 focus:shadow-xl"
                  />
                  <input
                    type="number"
                    placeholder="Enter Postal Code"
                    className="px-4 py-3 bg-gray-100 text-[#333] w-full text-md border rounded-md border-gray-500 focus:border-gray-800 outline-none placeholder:text-gray-500 transition-shadow duration-200 focus:shadow-xl"
                  />
                </div>

                <textarea
                  rows={4}
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
              <h2 className="Noto text-3xl font-bold text-[#333]">
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
