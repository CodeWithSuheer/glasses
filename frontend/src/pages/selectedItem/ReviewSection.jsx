import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import toast from "react-hot-toast";

const ReviewSection = ({ id, reviewId, allreviews }) => {
  const [selectedRating, setSelectedRating] = useState();

  const handleUpdateStarClick = (starValue) => {
    setSelectedRating(starValue);
  };

  const loading = useSelector((state) => state.reviews.loading);

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
                {loading ? (
                  <div className="flex justify-center mt-10">Loading</div>
                ) : (
                  <>
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
                              {new Date(data?.createdAt).toLocaleDateString()}
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
                                      onClick={() => openUpdateModal(data?.id)}
                                      size={20}
                                      className="text-gray-800"
                                    />
                                  </Button>
                                </DialogTrigger>
                                <IoTrashOutline
                                  onClick={() => handleDeleteReview(data?.id)}
                                  className="cursor-pointer"
                                  size={20}
                                />
                              </>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
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
                        starValue <= formData.rating ? "#FFC107" : "#D1D5DB",
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
    </>
  );
};

export default ReviewSection;
