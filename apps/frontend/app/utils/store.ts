import { configureStore } from "@reduxjs/toolkit";
import UserAuth from "./auth/auth";

export const store = configureStore({
    reducer:{
        UserAuth:UserAuth
    }
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;