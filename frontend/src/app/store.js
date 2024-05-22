import { configureStore } from "@reduxjs/toolkit";
import ActionsSlice from "../features/ActionsSlice";

export const store = configureStore({
  reducer: {
    // product: ProductSlice,
    action: ActionsSlice,
  },
});
