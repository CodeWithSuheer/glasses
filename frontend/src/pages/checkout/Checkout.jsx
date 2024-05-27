import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { updateuserAsync, userSessionAsync } from "../../features/authSlice";
import { createOrderAsync, getallOrderAsync } from "../../features/orderSlice";
import { useNavigate } from "react-router-dom";
// import { Modal } from "keep-react";
import { Helmet } from "react-helmet";
// import { Check } from "phosphor-react";
import { clearCart } from "../../features/ActionsSlice";
import { verifyCouponAsync } from "../../features/couponSlice";
import { useDispatch, useSelector } from "react-redux";

const Checkout = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [coupon, setCoupon] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      handleMoveTop();
      navigate("/");
    }, 100);
  };

  const user = useSelector((state) => state.auth.user);
  const userID = user?.user?.id;

  const [formData, setFormData] = useState({
    phone: user?.user?.phone || "",
    address: user?.user?.address || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const shippingCharges = 300;

  const [showCouponInput, setShowCouponInput] = useState(false);

  const handleCouponButtonClick = () => {
    setShowCouponInput(!showCouponInput);
  };

  const { cart, totalPrice } = useSelector((state) => state.action);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [cart, navigate, user]);

  const handleMoveTop = () => {
    window.scroll(0, 0);
  };

  const [couponSuccessData, setCouponSuccessData] = useState({
    code: "",
    discount: 0,
    discountAmount: 0,
    couponDiscountSuccess: false,
  });

  const couponData = {
    code: coupon,
    discount: couponSuccessData?.discountAmount,
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = userID;
    dispatch(updateuserAsync({ id, ...formData })).then((res) => {
      dispatch(userSessionAsync());

      if (res.payload.message === "Update Successfull") {
        const { phone, address } = formData;
        const items = cart;
        const totalAmount = couponSuccessData
          ? totalPrice + shippingCharges - couponSuccessData?.discountAmount
          : totalPrice + shippingCharges;

        const requestData = {
          name: user?.user?.name,
          phone,
          address,
          items,
          userID,
          totalAmount,
          ...(couponSuccessData.code !== "" && { couponUsed: couponData }),
        };

        dispatch(createOrderAsync(requestData)).then((res) => {
          if (res.payload.message === "Order PLaced Succcessfully") {
            openModal();
            dispatch(clearCart());
            dispatch(getallOrderAsync(id));
          }
          setFormData({
            phone: "",
            address: "",
          });
        });
      }
    });
  };

  const categories = cart.map((item) => item.category);

  const handleVerifyCoupon = () => {
    const formData = {
      code: coupon,
      userId: userID,
      category: categories,
    };
    dispatch(verifyCouponAsync(formData)).then((res) => {
      if (res.payload.couponDiscountSuccess) {
        setCouponSuccessData(res.payload);
      }
    });
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Checkout - Googly</title>
      </Helmet>

      <section className="w-full bg-[#f5f5f5] py-14 sm:pt-32 sm:pb-10 px-0 sm:px-8 lg:px-10 xl:px-0 min-h-screen">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <div className="overflow-hidden rounded-xl shadow border border-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Contact Info */}
              <div className="px-2 py-10 bg-white text-gray-900 md:px-8">
                <div className="flow-root">
                  <div className="-my-6 divide-y divide-gray-200">
                    <div className="py-6">
                      <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
                          {/* CONTACT DETAILS */}
                          <div>
                            <h3
                              id="contact-info-heading"
                              className="playfair text-3xl font-bold text-gray-900"
                            >
                              Contact Information
                            </h3>

                            <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-x-4">
                              {/* FULL NAME */}
                              {/* <div className="mt-1 w-full col-span-2">
                                <input
                                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                  id="name"
                                  type="text"
                                  name="name"
                                  value={user?.user.name}
                                  onChange={handleInputChange}
                                  placeholder="Enter Your Name"
                                />
                              </div> */}

                              {/* PHONE NUMBER */}
                              <div className="mt-1 w-full col-span-2">
                                <input
                                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                  type="number"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleInputChange}
                                  placeholder="Phone Number"
                                  id="name"
                                  required
                                />
                              </div>

                              <textarea
                                rows={7}
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                placeholder="Enter Shipping Address"
                                className="col-span-2 resize-y w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                required
                              ></textarea>
                            </div>
                          </div>

                          <div className="flex justify-end pt-3">
                            <button
                              type="submit"
                              className="rounded-md bg-[#EC72AF] hover:bg-[#f181b9] px-4 py-2.5 tracking-wide text-sm font-semibold text-white shadow-sm"
                            >
                              ORDER NOW
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product List */}
              <div className="bg-gray-100 px-5 py-10 md:px-8">
                <div className="flow-root">
                  <ul className="-my-7 divide-y divide-gray-200">
                    {cart.map((product) => (
                      <li
                        key={product.id}
                        className="flex items-stretch justify-between space-x-5 py-7"
                      >
                        <div className="flex flex-1 items-stretch">
                          <div className="flex-shrink-0">
                            <img
                              className="h-20 w-20 rounded-lg border border-gray-200 bg-white object-contain"
                              src={product?.image.downloadURL}
                              alt={product?.name}
                            />
                          </div>
                          <div className="ml-5 flex flex-col justify-between">
                            <div className="flex-1">
                              <p className="text-sm font-bold">
                                {product?.name}
                              </p>
                              <p className="mt-1.5 text-sm font-medium text-gray-500">
                                {product?.category}
                              </p>
                            </div>
                            <p className="mt-3 text-sm font-medium ">
                              x {product?.quantity}
                            </p>
                          </div>
                        </div>
                        <div className="ml-auto flex flex-col items-end justify-between">
                          <p className="text-right text-sm font-bold text-gray-900">
                            {/* Rs. {product?.price * product.quantity} */}
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
                          </p>
                          <button
                            type="button"
                            className="-m-2 inline-flex rounded p-2 text-gray-400 transition-all duration-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                          >
                            <span className="sr-only">Remove</span>
                            {/* <X className="h-5 w-5" /> */}
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <hr className="mt-6 border-gray-200" />
                <>
                  <div className="mt-6">
                    <div className="button_coupn flex justify-end">
                      <button
                        onClick={handleCouponButtonClick}
                        className="mb-3 text-[#EC72AF] font-medium underline underline-offset-2"
                      >
                        Have a coupon ?
                      </button>
                    </div>
                    {showCouponInput && (
                      <div className="sm:flex items-center sm:space-x-2.5 md:flex-col md:space-x-0 lg:flex-row lg:space-x-2.5">
                        <div className="flex-grow">
                          <input
                            className="flex w-[90%] rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter coupon code"
                            value={coupon}
                            onChange={(e) => setCoupon(e.target.value)}
                          />
                        </div>
                        <div className="mt-4 sm:mt-0 md:mt-4 lg:mt-0">
                          <button
                            onClick={handleVerifyCoupon}
                            type="button"
                            className="bg-[#EC72AF] text-white px-6 py-1.5 rounded-lg"
                          >
                            Verify
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </>

                <ul className="mt-6 space-y-3">
                  <li className="flex items-center justify-between text-gray-600">
                    <p className="text-md font-medium">Subtotal</p>
                    <p className="text-md font-medium">Rs. {totalPrice}</p>
                  </li>
                  <li className="flex items-center justify-between text-gray-600">
                    <p className="text-md font-medium">Shipping Charges</p>
                    <p className="text-md font-medium">Rs. {shippingCharges}</p>
                  </li>
                  {couponSuccessData?.couponDiscountSuccess ? (
                    <li className="flex items-center justify-between text-gray-600">
                      <p className="text-md font-medium">Coupon Discount</p>
                      <p className="text-md font-medium">
                        Rs. {couponSuccessData?.discountAmount}
                      </p>
                    </li>
                  ) : (
                    ""
                  )}
                  <li className="flex items-center justify-between text-gray-900">
                    <p className="text-md font-medium ">Total</p>
                    <p className="text-md font-bold ">
                      Rs.{" "}
                      {couponSuccessData
                        ? totalPrice +
                          shippingCharges -
                          couponSuccessData?.discountAmount
                        : totalPrice + shippingCharges}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-24 md:pt-28 lg:pt-10 pb-14 bg-white px-4 md:px-8 xl:px-0">
        <div className="xl:max-w-5xl lg:max-w-5xl max-w-xl mx-auto min-h-screen flex items-center">
          <div className="grid lg:grid-cols-3 gap-8 w-full">
            <div className="lg:col-span-2">
              <h2 className="Noto text-3xl font-bold text-[#333]">Checkout</h2>
              <p className="text-[#333] text-base mt-5 max-w-lg">
                Complete your transaction swiftly and securely with our
                easy-to-use payment process.
              </p>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-5 max-w-lg"
              >
                <div className="mb-3 grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <input
                    type="number"
                    placeholder="Enter Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
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
                  value={formData.address}
                  onChange={handleInputChange}
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

      {/* <Modal isOpen={isOpen} onClose={closeModal}>
        <Modal.Body className="flex w-[30rem] flex-col items-center p-6 lg:p-8">
          <Modal.Icon className="h-20 w-20 border border-success-100 bg-success-50 text-success-500">
            <Check size={60} />
          </Modal.Icon>
          <Modal.Content className="my-4 text-center">
            <h3 className="mb-2 text-body-1 font-bold text-metal-900">
              Order Successfully Placed
            </h3>
            <p className="mx-auto max-w-xs text-body-4 font-normal text-metal-600">
              Thanks for choosing us! We're excited to provide outstanding
              service.
            </p>
          </Modal.Content>
        </Modal.Body>
      </Modal> */}
    </>
  );
};

export default Checkout;
