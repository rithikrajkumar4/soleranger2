import { createReducer } from "@reduxjs/toolkit";

const intialState = {
  user: null,
};

export const loginReducer = createReducer(intialState, {
  login: (state, action) => {
    state.user = action.payload;
  },
  logout: (state) => {
    state.user = null;
  },
});
