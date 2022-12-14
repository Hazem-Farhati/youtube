import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice/productSlice";
import userSlice from "./userSlice/userSlice";

export const store = configureStore({ 
    reducer:{
        product: productSlice,
        user:userSlice
    }
 });
