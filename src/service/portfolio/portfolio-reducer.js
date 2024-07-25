import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  isAuthenticated: false,
  message: null,
  error: null,
};

export const portfolioReducer = createReducer({ initialState }, (builder) => {
  builder
    .addCase('GET_PROFILE_REQUEST', (state) => {
      state.loading = true;
    })
    .addCase('GET_PROFILE_SUCCESS', (state, action) => {
      state.loading = false;
      state.profile = action.payload;
    })
    .addCase('GET_PROFILE_FAILURE', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
   

    .addCase("CLEAR_ERRORS", (state) => {
      state.error = null;
    })
    .addCase("CLEAR_MESSAGE", (state) => {
      state.message = null;
    })
});