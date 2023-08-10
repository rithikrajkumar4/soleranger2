import { configureStore, createReducer } from "@reduxjs/toolkit";
// import { loginReducer } from '../reducer';
import productReducer from "./slices/productSlice";
import productDetailReducer from "./slices/productDetailSlice";
import authReducer from "./slices/authSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    productDetails: productDetailReducer,
    user: authReducer,
  },
});

export default store;
