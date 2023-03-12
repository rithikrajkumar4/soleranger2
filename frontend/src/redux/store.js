import {configureStore} from '@reduxjs/toolkit';
import { loginReducer } from '../reducer';
import productReducer from './slices/productSlice';

const store = configureStore({
    reducer:{
        products:productReducer,
        user : loginReducer,
    },
});

export default store;