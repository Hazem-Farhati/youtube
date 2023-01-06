import { configureStore } from "@reduxjs/toolkit";
import commentaireSlice from "./commentaireSlice/commentaireSlice";
import likeSlice from "./likeSlice/likeSlice";
import productSlice from "./productSlice/productSlice";
import counterSlice from "./userSlice/counterSlice";
import userSlice from "./userSlice/userSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    user: userSlice,
    counter: counterSlice,
    like: likeSlice,
    commentaire: commentaireSlice,
  },
});
