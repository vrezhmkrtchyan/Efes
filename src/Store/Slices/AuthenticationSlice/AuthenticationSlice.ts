import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../Store";
import type { IAuthenticationState } from "./AuthenticationTypes";

const initialState: IAuthenticationState = {
  access_token: "",
  refresh_token: "",
};

const AuthenticationSlice = createSlice({
  name: "AuthenticationData",
  initialState,
  reducers: {},

  extraReducers: (builder) => {},
});

export const AuthenticationReducer = AuthenticationSlice.reducer;
export const selectAuth = (state: RootState) => state.AuthenticationData;
