import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from '../baseurl'
export const fetchProducts = createAsyncThunk(
  'product/getProducts',
  async () => {
    const req = await axios.get(`${BASE_URL}api/v1/products`);
    return req.data;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default productSlice.reducer;
