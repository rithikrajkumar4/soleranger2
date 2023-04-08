import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../baseurl";

export const fetchProductDetails = createAsyncThunk(
  "product/getProductDetails",
  async (id) => {
    const res = await axios.get(`${BASE_URL}api/v1/product/${id}`);
    return res.data.product;
  }
);


const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState: {
      productDetail:null,
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchProductDetails.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchProductDetails.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.productDetail = action.payload;
        })
        .addCase(fetchProductDetails.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    }
  });
  
  export default productDetailSlice.reducer;