import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../Store";

interface AuthenticationState  {
    access_token: string,
    refresh_token: string,
}

const initialState: AuthenticationState = {
    access_token: "",
    refresh_token: "",
}

const AuthenticationSlice = createSlice({
    name: "AuthenticationData",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
      
    }
})


export const AuthenticationReducer = AuthenticationSlice.reducer
export const selectAuth = (state: RootState) => state.AuthenticationData