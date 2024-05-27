import axios from "axios";
import toast from "react-hot-toast";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// API URLs
const createOrderUrl = "http://localhost:7000/api/orders/createOrder";
const getAllOrderUrl = "http://localhost:7000/api/orders/getAllOrdersForUser";
const updateOrderUrl = "http://localhost:7000/api/orders/updateOrder";

// CREATE REVIEWS ASYNC THUNK
export const createOrderAsync = createAsyncThunk(
  "reviews/create",
  async (formData) => {
    try {
      const response = await axios.post(createOrderUrl, formData);
      // toast.success(response.data.message);
      console.log(response.data);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.error);
      console.error("Error submitting review:", error);
    }
  }
);

// GET ALL REVIEWS BY PRODUCT ASYNC THUNK
export const getallOrderAsync = createAsyncThunk(
  "reviews/getall",
  async (id) => {
    try {
      const response = await axios.post(getAllOrderUrl, { id });
      // toast.success(response.data.message);
      console.log(response.data);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.error);
      console.error("Error submitting review:", error);
    }
  }
);

export const updateOrderAsync = createAsyncThunk(
  "reviews/update",
  async (formData) => {
    try {
      const response = await axios.post(updateOrderUrl, formData);
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.error);
    }
  }
);

const initialState = {
  loading: false,
  allOrders: [],
};

const orderSlice = createSlice({
  name: "orderSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // GET ALL REVIEWS ADD CASE
      .addCase(getallOrderAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getallOrderAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.allOrders = action.payload;
      });
  },
});

export default orderSlice.reducer;
