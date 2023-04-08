import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../baseurl";

// {const loginData = {
//   email : email ,
//   password : password
// } ;

// let axiosConfig = {
//   headers : {
//   'Content-Type':'application/json',
//   // "Access-Control-Allow-Origin": "*",
//   }
// };
// const res = await axios.post(`${BASE_URL}/login`,loginData,axiosConfig)
// return res;}
export const authLogin = createAsyncThunk(
  "auth/login",
  async (email, password, thunkAPI) => {
    try {
      let axiosConfig = {
          headers : {
          'Content-Type':'application/json',
          // "Access-Control-Allow-Origin": "*",
          }
        };
      const res = await axios.post(`${BASE_URL}/login`, { email, password },axiosConfig);
      if(res.data.email){
        localStorage.setItem("user",JSON.stringify(res.data));
      }
      return res.data;
    } catch (err) {
      console.log(err);
    }
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
      });
  },
});

export default authSlice.reducer;
