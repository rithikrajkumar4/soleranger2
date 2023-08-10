import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import server from "../../index";

export const fetchProducts = createAsyncThunk(
  "product/getProducts",
  async (resultPerPage) => {
    const req = await axios.get(`${server}/products?page=${resultPerPage}`);
    return req.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: "idle",
    error: null,
    resultPerPage: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
        state.resultPerPage = action.payload.resultPerPage;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
