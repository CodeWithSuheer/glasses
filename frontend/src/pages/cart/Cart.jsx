import { useEffect } from "react";
import { IoAddOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { BsTrash3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import "../selectedItem/SelectedItem.css";
import {
  decreaseQuantity,
  getCartTotal,
  increaseQuantity,
  removeFromCart,
} from "../../features/ActionsSlice";

const Cart = () => {
  const dispatch = useDispatch();

  // const user = useSelector((state) => state.auth.user);
  const user = [];

  // getting data from store
  const { cart, totalPrice, totalQuantity } = useSelector(
    (state) => state.action
  );

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

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
                  CART
                </span>

                <h2 className="Noto mt-4 mb-6 text-4xl md:text-5xl font-medium text-white tracking-normal">
                  Cart
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
                Cart
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-14 sm:py-14 px-5 sm:px-8 lg:px-10 xl:px-0 min-h-[90vh]">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="header">
            <div className="flex justify-between items-center">
              <div className="Noto text-3xl lg:text-5xl font-medium">Cart</div>
              <div className="text-md font-semibold text-[#252525] underline underline-offset-4">
                <Link to="/products">Return to Shop</Link>
              </div>
            </div>
          </div>

          <div className="">
            {cart && cart.length > 0 ? (
              <div className=" py-6 grid place grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                <div className="rounded-xl col-span-2">
                  {/* First Product Row */}
                  {cart.map((product) => (
                    <div
                      key={product.id}
                      className="grid md:grid-cols-4 items-center gap-8 px-4 py-6 mb-4 shadow-md bg-white border border-gray-400 rounded-xl"
                    >
                      <div className="md:col-span-2 flex flex-wrap items-center gap-6">
                        <div className="shrink-0 shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)] p-0">
                          <img
                            className="w-28 h-22 object-contain rounded-md"
                            src={product?.image}
                            alt={product?.name}
                          />
                        </div>

                        <div>
                          <h3 className="playfair text-lg tracking-wide font-bold text-[#333]">
                            VelvetGlide Boots
                          </h3>
                          <h6 className="text-md text-gray-500 mt-2 flex items-center">
                            Price:{" "}
                            <strong className="ml-2 flex items-center">
                              {product.price !== product.sale_price ? (
                                <>
                                  <p className="">Rs. {product.sale_price}</p>
                                </>
                              ) : (
                                <p className="">Rs. {product.price}</p>
                              )}
                            </strong>
                          </h6>
                        </div>
                      </div>

                      <div className="flex">
                        <button
                          onClick={() => dispatch(decreaseQuantity(product.id))}
                          className="bg-transparent py-2 font-semibold text-[#333]"
                          type="button"
                        >
                          <FiMinus size={22} />
                        </button>

                        <input
                          type="text"
                          className="mx-1 h-8 w-10 rounded-md border border-gray-400 text-center bg-transparent text-black"
                          value={product.quantity}
                          readOnly
                        />

                        <button
                          onClick={() => dispatch(increaseQuantity(product.id))}
                          className="bg-transparent py-2 font-semibold text-[#333]"
                          type="button"
                        >
                          <IoAddOutline size={22} />
                        </button>
                      </div>

                      <div className="flex items-center">
                        <h4 className="text-lg font-bold text-[#333]">
                          {/* Rs.{product.price * product.quantity} */}
                          {product?.price !== product?.sale_price ? (
                            <>
                              <p className="">
                                Rs. {product.sale_price * product.quantity}
                              </p>
                            </>
                          ) : (
                            <p className="">
                              Rs. {product.price * product.quantity}
                            </p>
                          )}
                        </h4>

                        <div
                          onClick={() => dispatch(removeFromCart(product.id))}
                          className="w-3 mr-4 cursor-pointer shrink-0 ml-auto"
                        >
                          <BsTrash3 size={20} className="text-red-700" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div class="shadow-md p-6 lg:sticky lg:top-0 h-max border border-gray-400 rounded-xl">
                  <h3 class="text-lg font-bold text-gray-800 bor4er-b pb-2">
                    Cart Total
                  </h3>

                  <ul class="text-gray-800 divide-y mt-0">
                    <li class="flex flex-wrap gap-4 text-base py-4">
                      Subtotal{" "}
                      <span class="ml-auto font-bold">Rs {totalPrice}</span>
                    </li>
                    <li class="flex flex-wrap gap-4 text-base py-4 font-bold">
                      Total <span class="ml-auto">Rs {totalPrice}</span>
                    </li>
                  </ul>

                  {/* BUTTONS */}
                  <div className="buttons flex justify-center items-center">
                    {user ? (
                      <Link
                        to="/checkout"
                        onClick={() => window.scroll(0, 0)}
                        class="mt-6 px-6 py-2.5 text-center hover:bg-black bg-[#252525] text-white w-full"
                      >
                        Checkout
                      </Link>
                    ) : (
                      <Link
                        to="/login?from=cart"
                        onClick={() => window.scroll(0, 0)}
                        class="mt-6 px-6 py-2.5 text-center hover:bg-black bg-[#252525] text-white w-full"
                      >
                        Checkout
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              // IF THERE IS NOTHING IN THE CART
              <div className="container text-gray-800">
                <div className="mx-0 text-center">
                  <div className="py-5">
                    <img
                      className="w-64 mx-auto"
                      src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/pngwing.com_1.png?v=1716327032"
                      alt=""
                    />
                    <h3 className="mb-2 mt-5 text-xl font-medium">
                      No Item In Cart
                    </h3>
                    <Link
                      to="/shop"
                      onClick={() => window.scroll(0, 0)}
                      className="pt-2 text-xl font-medium text-[#252525] uppercase underline underline-offset-2"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
