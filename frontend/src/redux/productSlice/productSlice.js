import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//get product
export const getProduct = createAsyncThunk("product/get", async () => {
  try {
    let result = await axios.get(`http://localhost:5000/product/all`);
    console.log(result.data.product, "product get");
    return result.data;
  } catch (error) {
    console.log(error);
  }
});
//add product
//update product
export const updateProduct = createAsyncThunk(
  "poduct/update/",
  async ({ product, id }) => {
    try {
      let result = await axios.put(
        `http://localhost:5000/product/update/${id}`,
        product
      );
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const createProduct=createAsyncThunk(
  "product/add",
  async(product)=>{
    try {
      let result=await axios.post(`http://localhost:5000/product/add`,product)
      return result.data
    } catch (error) {
      console.log(error)
    }
  }

)



const initialState = {
  product: null,
  status: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    //get product
    [getProduct.pending]: (state) => {
      state.status = "loading";
    },
    [getProduct.fulfilled]: (state, action) => {
      state.status = "fullfieled";
      state.product = action.payload.product;
    },
    [getProduct.rejected]: (state) => {
      state.status = "failed";
    },
//add product
    [createProduct.pending]: (state) => {
      state.status = "loading";
    },
    [createProduct.fulfilled]: (state, action) => {
      state.status = "fullfieled";
      state.product = [action.payload.product,...state.product];
    return state
    },
    [createProduct.rejected]: (state) => {
      state.status = "failed";
    },

      //update product
    [updateProduct.pending]: (state) => {
      state.status = "loading";
    },
    [updateProduct.fulfilled]: (state, action) => {
      state.status = "fullfieled";
  
    },
    [updateProduct.rejected]: (state) => {
      state.status = "failed";
    },
  },
});



export default productSlice.reducer;
