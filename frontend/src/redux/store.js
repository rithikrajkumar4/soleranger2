import {configureStore} from '@reduxjs/toolkit';
import { loginReducer } from '../reducer';
import productReducer from './slices/productSlice';
import productDetailReducer from './slices/productDetailSlice';

const store = configureStore({
    reducer:{
        products:productReducer,
        productDetails:productDetailReducer,
        user : loginReducer,
    },
});

export default store;