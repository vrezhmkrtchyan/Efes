import { configureStore } from "@reduxjs/toolkit";
import { AuthenticationReducer } from "./Slices/AuthenticationSlice/AuthenticationSlice";

export const Store = configureStore({
  reducer: {
    AuthenticationData: AuthenticationReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
