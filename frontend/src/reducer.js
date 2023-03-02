import { createReducer } from "@reduxjs/toolkit";

const intialState = {
  c: 0,
};

export const customReducer = createReducer(intialState, {
  increment: (state) => {
    state.c += 1;
  },
});
