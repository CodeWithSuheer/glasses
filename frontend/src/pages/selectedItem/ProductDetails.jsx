import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import BestSeller from "../home/BestSeller";
import { addToCart } from "../../features/ActionsSlice";
import { useNavigate } from "react-router-dom";
import {
  createreviewsAsync,
  deletereviewsAsync,
  getallreviewsAsync,
  updatereviewsAsync,
} from "../../features/reviewsSlice";
import { FiEdit } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// STAR RATING
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<FaStar key={i} size={18} className="mx-0.5 text-[#FFC209]" />);
  }
  return <div className="flex">{stars}</div>;
};

export const ProductOverviewTwo = ({ product, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productId = id;

  const [reviewId, setReviewId] = useState();
  const [deleteReviewId, setDeleteReviewId] = useState();

  const user = useSelector((state) => state.auth.user);
  const userID = user?.user?.id;

  // FORMDATA
  const [formData, setFormData] = useState({
    review: "",
    rating: 1,
  });

  // UPDATE REVIEW DATA
  const [updateReviewData, setUpdateReviewData] = useState({
    review: "",
    rating: 1,
  });

  const openUpdateModal = (id) => {
    setReviewId(id);
    const review = allreviews.find((item) => item.id === id);
    if (review) {
      setUpdateReviewData({
        review: review.review,
        rating: review.rating,
      });
    }
    // setIsOpenUpdate(true);
  };

  // filter review based on id
  const allreviews = useSelector((state) => state.reviews.allReviews);
  // console.log("allreviews", allreviews);

  // const selectedReview = allreviews?.find((item) => item.id === reviewId);
  // console.log("selectedReview", selectedReview);

  const loading = useSelector((state) => state.reviews.loading);

  // HANDLE ADD TO CART
  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
      navigate("/shop");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      toast.success("Item Added to Cart");
    }
  };

  const [selectedRating, setSelectedRating] = useState();

  const handleUpdateStarClick = (starValue) => {
    setSelectedRating(starValue);
  };

  // CALLING API TO GET ALL REVIEWS
  useEffect(() => {
    dispatch(getallreviewsAsync(id));
  }, []);

  const handleStarClick = (starValue) => {
    setFormData((prevData) => ({ ...prevData, rating: starValue }));
  };

  // HANDLE SUBMIT REVIEW
  const handleSubmitReview = () => {
    const productID = id;

    if (!formData.review || formData.rating === 0) {
      toast.error("Please leave a review to rate the product");
      return;
    }

    dispatch(createreviewsAsync({ productID, userID, ...formData })).then(
      (res) => {
        if (res.payload.message === "Review created successfully") {
          dispatch(getallreviewsAsync(id));
        }
      }
    );
    setFormData({ review: "", rating: 1 });
  };

  // HANDLE UPDATE REVIEW
  const handleUpdateReview = (review_Id, rating) => {
    // const id = review_Id;
    // if (selectedRating !== rating) {
    //   const updateReviewDataOptional =
    //     updateReviewData as Partial<ReviewFormData>;
    //   delete updateReviewDataOptional.rating;
    //   const payload: Partial<UpdateReviewPayload> = { id, ...updateReviewData };
    //   payload.rating = selectedRating;
    //   dispatch(updatereviewsAsync(payload as UpdateReviewPayload)).then(() => {
    //     dispatch(getallreviewsAsync(productId));
    //     closeUpdateModal();
    //   });
    // } else {
    //   dispatch(updatereviewsAsync({ id, ...updateReviewData })).then(() => {
    //     dispatch(getallreviewsAsync(productId));
    //     closeUpdateModal();
    //   });
    //   setUpdateReviewData({ review: "", rating: 1 });
    // }
  };

  const handleReviewChange = (e) => {
    setUpdateReviewData({
      ...updateReviewData,
      review: e.target.value,
    });
  };

  // HANDLE DELETE REVIEW
  const handleDeleteReview = (id) => {
    dispatch(deletereviewsAsync(id)).then((res) => {
      if (res.payload.message === "Review deleted successfully") {
        dispatch(getallreviewsAsync(productId));
      }
    });
  };

  return (
    <>
      <Dialog>
        <div className="pt-6 pb-10 w-full">
          <div className="px-4 xl:px-0 max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
            <div className="min-h-[70vh]">
              <div>
                <div>
                  <div className="py-10 xl:pt-16 xl:pb-6 grid items-start grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-10">
                    <div className="w-full h-[30rem] top-0 sm:flex gap-2 border border-gray-500 bg-white">
                      {/* MAIN DISPLAYER IMAGE */}
                      <img
                        alt="Product"
                        className="w-full h-full pr-0 lg:pr-0 object-cover"
                        src={product?.image?.downloadURL}
                      />
                    </div>

                    {/* CONTENT SIDE */}
                    <div className="">
                      <div className="content_side pt-5">
                        <h2 className="text-4xl font-medium text-gray-800">
                          {product?.name}
                        </h2>

                        {/* PRICE SECTION */}
                        <div className="flex flex-wrap items-center gap-4 mt-4">
                          {product?.price !== product?.sale_price ? (
                            <>
                              <p className="text-gray-500 text-xl line-through">
                                Rs.{product?.price}
                              </p>
                              <p className="text-red-600 text-3xl font-bold">
                                Rs.{product?.sale_price}
                              </p>
                            </>
                          ) : (
                            <p className="text-gray-800 text-2xl font-bold">
                              Rs. {product?.price}
                            </p>
                          )}
                        </div>

                        {/* ABOUT */}
                        <div className="mt-4">
                          {/* <StarRating rating={product?.rating} /> */}

                          {product && (
                            <div className="flex items-center mt-4">
                              {product.averageRating === 0 ? (
                                "No Ratings"
                              ) : (
                                <StarRating rating={product.averageRating} />
                              )}
                              <span className="ml-2 text-sm text-gray-500">
                                ({product.averageRating})
                              </span>
                            </div>
                          )}

                          {/* DESCRIPTION */}
                          <div className="mt-4 pl-0 text-md text-gray-800">
                            <p>{product?.description}</p>
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

                {/* REVIEW SECTION */}
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
                              className="mt-3 px-6 py-3 lg:py-5 rounded-lg border border-gray-300 bg-[#ebebeb] all_reviews"
                            >
                              <div className="flex justify-between flex-wrap items-center gap-2">
                                <div className="left flex items-center gap-2">
                                  <h2 className="font-semibold">{data.name}</h2>{" "}
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
                                      <DialogTrigger asChild>
                                        <Button className="bg-transparent hover:bg-transparent px-0">
                                          <FiEdit
                                            onClick={() =>
                                              openUpdateModal(data?.id)
                                            }
                                            size={20}
                                            className="text-gray-800"
                                          />
                                        </Button>
                                      </DialogTrigger>
                                      <IoTrashOutline
                                        onClick={() =>
                                          handleDeleteReview(data?.id)
                                        }
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
                          className="w-full resize-y border border-gray-800 rounded-xl align-top focus:ring-0 focus:outline-none focus:border-gray-800 sm:text-sm p-4"
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
            </div>
          </div>
        </div>

        <DialogContent className="sm:max-w-[625px] px-3 sm:px-5">
          <DialogHeader>
            <DialogTitle>Update Your Review</DialogTitle>
          </DialogHeader>
          <div className="">
            <div className="items-center">
              <Label htmlFor="name" className="text-right">
                Your Review:
              </Label>
              <Textarea
                className="mt-3 focus:outline-none focus:border-none  border-gray-500"
                placeholder="Type your message here."
                value={updateReviewData.review}
                onChange={handleReviewChange}
              />

              <div className="mt-4 mb-2 flex items-center justify-start gap-1">
                <p className="mr-1 text-gray-700 font-medium text-sm">
                  Rating:
                </p>
                {[1, 2, 3, 4, 5].map((starValue) => (
                  <FaStar
                    key={starValue}
                    style={{
                      color:
                        starValue <= updateReviewData.rating
                          ? "#FFC107"
                          : "#D1D5DB",
                      cursor: "pointer",
                    }}
                    onClick={() => handleUpdateStarClick(starValue)}
                  />
                ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={() => handleUpdateReview(reviewId, data.rating)}
              type="submit"
            >
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
