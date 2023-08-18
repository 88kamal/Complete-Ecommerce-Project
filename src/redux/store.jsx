import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

export const store = configureStore({
    reducer :{
        cart : cartSlice
    },
    devTools : true
})