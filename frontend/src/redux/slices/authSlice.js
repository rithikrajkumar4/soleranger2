import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../baseurl";
// import  Cookies from 'js-cookie';

let axiosConfig = {
  headers: {
    "Content-Type": "application/json",
    // "credentials": 'include',
    // "Acess-Control-Allow-Origin":`${BASE_URL}` 
  },
  withCredentials: true,
};

export const authLogin = createAsyncThunk(
  
  "auth/login",
  async (data, thunkAPI) => {
    const res = await axios.post(`${BASE_URL}/login`,data,axiosConfig)
    console.log(res.data) ;
    // if(res.data.success){
    //   const options = {
    //     expires:5,
    //     // HttpOnly:true,
    //   };
    //   Cookies.set('token',res.data.token,options) ;
    // }
    return res.data;
  }
);

export const authRegister = createAsyncThunk(
  "auth/register",
  async(data,thunkAPI)=>{
    const res = await axios.post(`${BASE_URL}/register`,data,axiosConfig);
    // console.log(document.cookie)
    return res.data;
  }
)
// Load user that is if the user  is present in the cookie

export const authLogout = createAsyncThunk(
  "auth/logout",
  async(data,thunkAPI)=>{
    const res = await axios.get(`${BASE_URL}/logout`,data,axiosConfig);
    return res.data;
  }
)

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    status: "idle",
    error: null,
  },
    extraReducers: (builer) => {
    builer
    .addCase(authLogout.pending, (state) => {
      state.status = "loading";
    })
    .addCase(authLogout.fulfilled, (state) => {
      state.status = "succeeded";
      state.user = null;
      state.isAuthenticated = null;
      state.status = "idle";
      state.error = null;
    })
    .addCase(authLogout.rejected, (state,action) => {
      state.status = "failed";
      state.error = action.error.message;
    })
      .addCase(authLogin.pending, (state) => {
        state.status = "loading";
        state.isAuthenticated = false;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(authLogin.rejected, (state, action) => {
        state.status = "failed";
        state.isAuthenticated = false;
        state.error = action.error.message;
      })
      .addCase(authRegister.pending, (state) => {
        state.status = "loading";
        state.isAuthenticated = false;
      })
      .addCase(authRegister.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(authRegister.rejected, (state, action) => {
        state.status = "failed";
        state.isAuthenticated = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
