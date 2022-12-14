import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//register
export const userRegister = createAsyncThunk("user/register", async (user) => {
  try {
    let result = await axios.post("http://localhost:5000/user/register", user);
    // console.log(result.data)
    return result.data;
  } catch (error) {
    console.log(error);
  }
});
//login
export const userLogin = createAsyncThunk("user/login", async (user) => {
  try {
    let result = await axios.post("http://localhost:5000/user/login", user);
    // console.log(result.data)
    return result.data;
  } catch (error) {
    console.log(error);
  }
});
const initialState = {
  user: null,
  status: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

  extraReducers: {
    //register extra reducers
    [userRegister.pending]: (state) => {
      state.status = "loading";
    },
    [userRegister.fulfilled]: (state, action) => {
      state.status = "success";
      //console.log("=========",action.payload);
      state.user = action.payload.user;
      localStorage.setItem("token", action.payload.token);
      return state;
    },
    [userRegister.rejected]: (state) => {
      state.status = "fail";
    },

    //login extra reducers
    [userLogin.pending]: (state) => {
      state.status = "loading";
    },
    [userLogin.fulfilled]: (state, action) => {
      state.status = "success";
      //console.log("=========",action.payload);
      state.user = action.payload.user;
      localStorage.setItem("token", action.payload.token);
      return state;
    },
    [userLogin.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

export default userSlice.reducer;
