import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import server from "../../index";
import Cookies from "js-cookie";

let axiosConfig = {
  headers: {
    "Content-Type": "application/json",
    // "credentials": 'include',
    // "Acess-Control-Allow-Origin":`${server}`
  },
  withCredentials: true,
};

export const authLogin = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    const res = await axios.post(`${server}/login`, data, axiosConfig);
    if (res.data.success) {
      const options = {
        expires: 5,
        // HttpOnly:true,
      };
      Cookies.set("token", res.data.token, options);
    }
    return res.data;
  }
);

export const authRegister = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    const res = await axios.post(`${server}/register`, data, axiosConfig);
    console.log(document.cookie);
    return res.data;
  }
);

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
