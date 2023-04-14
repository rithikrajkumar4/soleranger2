import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../baseurl";


let axiosConfig = {
  headers: {
    "Content-Type": "application/json",
    // "Acess-Control-Allow-Origin":`${BASE_URL}` 
  },
  // withCredentials: true,
};
export const authLogin = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    const res = await axios.post(`${BASE_URL}/login`,data,axiosConfig)
    return res.data;
  }
);
export const authRegister = createAsyncThunk(
  "auth/register",
  async(data,thunkAPI)=>{
    const res = await axios.post(`${BASE_URL}/register`,data,axiosConfig);
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
  reducers: {
    logout(state) {
      state.user = null;
      state.isAuthenticated = null;
      state.status = "idle";
      state.error = null;
    },
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
