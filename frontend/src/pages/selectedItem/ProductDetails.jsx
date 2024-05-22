import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import BestSeller from "../home/BestSeller";
import { addToCart } from "../../features/ActionsSlice";
import { useNavigate } from "react-router-dom";

// STAR RATING
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<FaStar key={i} size={18} className="mx-0.5 text-[#FFC209]" />);
  }
  return <div className="flex">{stars}</div>;
};

export const ProductOverviewTwo = ({ selectedItem }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // FORMDATA
  const [formData, setFormData] = useState({
    review: "",
    rating: 1,
  });

  //   const allreviews = useAppSelector((state) => state.reviews.allReviews);
  const allreviews = [];
  // console.log("allreviews", allreviews);

  // HANDLE ADD TO CART
  const handleAddToCart = () => {
    if (selectedItem) {
      dispatch(addToCart(selectedItem));
      navigate("/shop");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // HANDLE SUBMIT REVIEW
  const handleSubmitReview = () => {
    const productID = id;

    if (!formData.review || formData.rating === 0) {
      toast.error("Please leave a review or rate with at least one star.");
      return;
    }

    // dispatch(createreviewsAsync({ productID, userID, ...formData })).then(
    //   () => {
    //     dispatch(getallreviewsAsync(id));
    //   }
    // );
    setFormData({ review: "", rating: 1 });
  };

  return (
    <>
      <div className="pt-4 pb-10 w-full">
        <div className="px-4 xl:px-0 max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <div className="min-h-[70vh]">
            {selectedItem.map((selectedItem, index) => (
              <div key={index}>
                <div>
                  <div className="py-10 xl:pt-16 xl:pb-6 grid items-start grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-10">
                    <div className="w-full h-[30rem] top-0 sm:flex gap-2 border border-gray-500 bg-white">
                      {/* MAIN DISPLAYER IMAGE */}
                      <img
                        alt="Product"
                        className="w-full h-full pr-0 lg:pr-0 object-contain rounded-lg"
                        src={selectedItem?.image}
                      />
                    </div>

                    {/* CONTENT SIDE */}
                    <div className="">
                      <div className="content_side pt-5">
                        <h2 className="text-4xl font-medium text-gray-800">
                          {selectedItem?.name}
                        </h2>

                        {/* PRICE SECTION */}
                        <div className="flex flex-wrap items-center gap-4 mt-4">
                          {selectedItem?.price !== selectedItem?.sale_price ? (
                            <>
                              <p className="text-gray-500 text-xl line-through">
                                Rs.{selectedItem?.price}
                              </p>
                              <p className="text-red-600 text-3xl font-bold">
                                Rs.{selectedItem?.sale_price}
                              </p>
                            </>
                          ) : (
                            <p className="text-gray-800 text-2xl font-bold">
                              Rs. {selectedItem?.price}
                            </p>
                          )}
                        </div>

                        {/* ABOUT */}
                        <div className="mt-4">
                          {/* RATING */}
                          <StarRating rating={selectedItem?.rating} />

                          {/* DESCRIPTION */}
                          <div className="mt-4 pl-0 text-md text-gray-800">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Cumque, voluptas. Quidem
                              sapiente maxime sunt beatae? Asperiores illo
                              perferendis corporis officia, quam consequatur
                              aperiam enim voluptatem cum sequi doloribus
                              numquam eum
                            </p>
                          </div>
                        </div>

                        <div className="details_box py-6">
                          <div className="py-0.5 details flex justify-start items-center font-semibold">
                            <h3 className="name w-40">SKU</h3>
                            <h3 className="name w-full">00157PD-1-2</h3>
                          </div>
                          <div className="py-0.5 details flex justify-start items-center font-semibold">
                            <h3 className="name w-40">Categories</h3>
                            <h3 className="name w-full">
                              Men’s Eyewear, Prescription Glasses, Women’s
                              Eyewear
                            </h3>
                          </div>
                          <div className="py-0.5 details flex justify-start items-center font-semibold">
                            <h3 className="name w-40">Tags</h3>
                            <h3 className="name w-full">
                              Fashion, Glass, Men, Women
                            </h3>
                          </div>
                        </div>

                        {/* CART BUTTON */}
                        <button
                          onClick={handleAddToCart}
                          className="w-full mt-4 flex items-center text-lg font-medium justify-center gap-2 px-4 py-3 hover:bg-black bg-[#252525] text-white"
                          type="button"
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pb-5 max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
                  <div className="mt-8">
                    <>
                      <div className="mb-8 reviews max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
                        {/* ALL REVIEWS  */}
                        <div className="mt-6 all_reviews">
                          <h2 className="text-2xl text-gray-800 font-semibold">
                            ALL REVIEWS
                          </h2>

                          {/* ALL REVIEWS MAPPED HERE */}
                          {allreviews.map((data, index) => (
                            <div
                              key={index}
                              className="mt-3 px-6 py-4 rounded-xl border border-gray-300 bg-[#FFF3F9] all_reviews"
                            >
                              <div className="flex justify-between flex-wrap items-center gap-2">
                                <div className="left flex items-center gap-2">
                                  <h2>{data.name}</h2>{" "}
                                  <p className="w-24">
                                    <StarRating rating={data?.rating} />
                                  </p>
                                </div>
                                <div className="right">
                                  <p>
                                    {new Date(
                                      data?.createdAt
                                    ).toLocaleDateString()}
                                  </p>
                                </div>
                              </div>
                              <div className="mt-2 flex justify-between flex-wrap items-center gap-2">
                                <p className="my-1">{data?.review}</p>

                                <div className="edit flex items-center  gap-3">
                                  {userID === data.userID ? (
                                    <>
                                      <FiEdit
                                        onClick={() =>
                                          openUpdateModal(data?.id)
                                        }
                                        className="cursor-pointer"
                                        size={20}
                                      />
                                      <IoTrashOutline
                                        onClick={() => openModal(data?.id)}
                                        className="cursor-pointer"
                                        size={20}
                                      />
                                    </>
                                  ) : null}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="mb-1 ml-1 text-gray-700 font-medium">
                          Your Review*
                        </p>
                        <textarea
                          id="OrderNotes"
                          className="w-full resize-y border border-gray-800 rounded-xl align-top focus:ring-0 focus:outline-none focus:border-pink-500 sm:text-sm p-4"
                          rows={4}
                          placeholder="Write a review..."
                          value={formData.review}
                          onChange={(e) =>
                            setFormData((prevData) => ({
                              ...prevData,
                              review: e.target.value,
                            }))
                          }
                        ></textarea>

                        {/* Star rating section */}
                        <div className="mt-4 mb-2 flex items-center justify-start gap-1">
                          <p className="mr-1 text-gray-700 font-medium text-sm">
                            Give your rating:
                          </p>
                          {[1, 2, 3, 4, 5].map((starValue) => (
                            <FaStar
                              key={starValue}
                              style={{
                                color:
                                  starValue <= formData.rating
                                    ? "#FFC107"
                                    : "#D1D5DB",
                                cursor: "pointer",
                              }}
                              onClick={() => handleStarClick(starValue)}
                            />
                          ))}
                        </div>

                        <button
                          className="mt-1 text-white py-2 px-4 hover:bg-black bg-[#252525]"
                          onClick={handleSubmitReview}
                        >
                          Submit Review
                        </button>
                      </div>
                    </>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
