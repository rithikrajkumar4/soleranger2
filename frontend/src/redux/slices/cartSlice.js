import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from '../baseurl'


const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers :{
    addItem : (state,action) => {
        state.push(action.payload) ;
    },
    removeItem : (state,action) =>{
        const index  = state.findIndex(item => item.id === action.payload) ;
        if(index != -1){
            state.splice(index,1) ;
        }
    },
  },
});

export const {addItem,removeItem} = cartSlice.actions ;
export default cartSlice.reducer;
