// authSlice.js

import { createSlice } from "@reduxjs/toolkit";
import {
  getUserCredentials,
  removeUserCredentials,
  saveUserCredentials,
} from "../../utils/auth";

const initialState = {
  isAuthenticated: getUserCredentials() !== null,
  username: getUserCredentials(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.username = action.payload;
      saveUserCredentials(action.payload);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.username = "";
      removeUserCredentials();
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
