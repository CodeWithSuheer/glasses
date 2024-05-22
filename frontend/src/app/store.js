import { configureStore } from "@reduxjs/toolkit";
import ActionsSlice from "../features/ActionsSlice";
import authSlice from "../features/authSlice";

export const store = configureStore({
  reducer: {
    action: ActionsSlice,
    auth: authSlice,
  },
});
