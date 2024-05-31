import { OrdersModel } from "../models/OrdersModel.js";
import { ProductsModel } from "../models/Products.Model.js";
import { reviewsAndRatings } from "../models/ReviewsModel.js";
import { setMongoose } from "../utils/Mongoose.js";

export const getLatestPRoducts = async (req, res, next) => {
  try {
    const products = (await ProductsModel.find({ latest: true })).splice(0,12);
    const productIds  = products.map((item)=>item._id);
    const ratings = await reviewsAndRatings.find({productID:productIds});

      // Calculate average ratings for each product
      const ratingsMap = ratings.reduce((acc, rating) => {
        if (!acc[rating.productID]) {
          acc[rating.productID] = { sum: 0, count: 0 };
        }
        acc[rating.productID].sum += rating.rating;
        acc[rating.productID].count += 1;
        return acc;
      }, {});
  
      // Add averageRating to each product
      const productDataWithRatings = products.map((product) => {
        const ratingData = ratingsMap[product._id] || { sum: 0, count: 0 };
        const averageRating = ratingData.count > 0 ? (ratingData.sum / ratingData.count).toFixed(1) : 0;
        const {_id,...productDataWithoutId} = product.toObject();
        return {
          ...productDataWithoutId,
          id:product._id,
          averageRating: parseFloat(averageRating),
        };
      });
  
    setMongoose();
    return res.status(200).json(productDataWithRatings);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getProducts = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 16;
    let search = req.query.search || "";
    let category = req.query.category || "All";

    let query = {
      name: { $regex: search, $options: "i" },
    };

    if (category !== "All") {
      query.category = category;
    }

    const productData = await ProductsModel.find(query)
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({createdAt:-1})

    const total = await ProductsModel.countDocuments(query);
    const productIds  = productData.map((item)=>item._id);
    const ratings = await reviewsAndRatings.find({productID:productIds});

      // Calculate average ratings for each product
      const ratingsMap = ratings.reduce((acc, rating) => {
        if (!acc[rating.productID]) {
          acc[rating.productID] = { sum: 0, count: 0 };
        }
        acc[rating.productID].sum += rating.rating;
        acc[rating.productID].count += 1;
        return acc;
      }, {});
  
      // Add averageRating to each product
      const productDataWithRatings = productData.map((product) => {
        const ratingData = ratingsMap[product._id] || { sum: 0, count: 0 };
        const averageRating = ratingData.count > 0 ? (ratingData.sum / ratingData.count).toFixed(1) : 0;
        const {_id,...productDataWithoutId} = product.toObject();
        return {
          ...productDataWithoutId,
          id:product._id,
          averageRating: parseFloat(averageRating),
        };
      });
  
    const response = {
      totalPages: Math.ceil(total / limit),
      page,
      productData:productDataWithRatings,
    };
    setMongoose();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const { id } = req.body;
    if (!id) throw new Error("Product Id Required");
    const product = await ProductsModel.findById(id);
    const productReviews = await reviewsAndRatings.find({ productID: id });

    let averageRating = 0;
    if (productReviews.length > 0) {
      const totalRating = productReviews.reduce(
        (sum, review) => sum + review.rating,
        0
      );
      averageRating = totalRating / productReviews.length;
    };
    const {_id,...productDataWithoutId} = product.toObject();
    const productWithRating = {
      ...productDataWithoutId,
      id:product._id,
      averageRating: parseFloat(averageRating.toFixed(1))
    };
    setMongoose();
    return res.status(200).json(productWithRating);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getBestSellingProducts = async (req,res,next) => {
  try {
   const productOrderCounts = await OrdersModel.aggregate([
    {$unwind:"$items"},
    {$group:{_id:"$items.id",count:{$sum:1}}},
    {$sort:{count:-1}},
    {$limit:8}
   ]);
   const productIds = productOrderCounts.map((product) => product._id);
   const products = await ProductsModel.find({_id:productIds});
  const ratings = await reviewsAndRatings.find({productID:productIds});

      const ratingsMap = ratings.reduce((acc, rating) => {
        if (!acc[rating.productID]) {
          acc[rating.productID] = { sum: 0, count: 0 };
        }
        acc[rating.productID].sum += rating.rating;
        acc[rating.productID].count += 1;
        return acc;
      }, {});
  
      // Add averageRating to each product
      const productDataWithRatings = products.map((product) => {
        const ratingData = ratingsMap[product._id] || { sum: 0, count: 0 };
        const averageRating = ratingData.count > 0 ? (ratingData.sum / ratingData.count).toFixed(1) : 0;
        const {_id,...productDataWithoutId} = product.toObject();
        return {
          ...productDataWithoutId,
          id:product._id,
          averageRating: parseFloat(averageRating),
        };
      });
  
    setMongoose();
    return res.status(200).json(productDataWithRatings);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
