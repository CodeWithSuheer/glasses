import { configureStore } from "@reduxjs/toolkit";
import ActionsSlice from "../features/ActionsSlice";
import authSlice from "../features/authSlice";
import productSlice from "../features/productSlice";
import reviewsSlice from "../features/reviewsSlice";

export const store = configureStore({
  reducer: {
    action: ActionsSlice,
    auth: authSlice,
    products: productSlice,
    reviews: reviewsSlice,
  },
});
