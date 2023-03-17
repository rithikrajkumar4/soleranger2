import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../baseurl";

export const fetchSingleProduct = () =>
  createAsyncThunk("product/getProductDetails", async (id,thunkAPI) => {
    const req = await axios.get(`${BASE_URL}api/v1/product/${id}`)
    .then((res) => {
      console.log("working") ;
      console.log(res) ;
      return req.data;
    })
    .catch(err => console.log(err));
  });

const productDetailSlice = createSlice({
  name: "ProductSingleDetail",
  initialState: {
    product: {},
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
 
export default productDetailSlice.reducer;
