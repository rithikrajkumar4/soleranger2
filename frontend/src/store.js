import {configureStore} from '@reduxjs/toolkit';
import { loginReducer } from './reducer';

const store = configureStore({
    reducer:{
        user : loginReducer,
    },
});

export default store;