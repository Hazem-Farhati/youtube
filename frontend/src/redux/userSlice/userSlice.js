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

//current user
export const userCurrent = createAsyncThunk("user/current", async () => {
  try {
    let result = await axios.get("http://localhost:5000/user/current", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    // console.log(result.data)
    return result.data;
  } catch (error) {
    console.log(error);
  }
});
console.log("result");
//add
export const createUser = createAsyncThunk("user/add", async (user) => {
  try {
    let result = await axios.post(`http://localhost:5000/user/add`, user);
    return result.data;
  } catch (error) {
    console.log(error);
  }
});
//update
export const updateUser = createAsyncThunk(
  "user/update/",
  async ({ user, id }) => {
    try {
      let result = await axios.put(
        `http://localhost:5000/user/update/${id}`,
        user
      );
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  user: null,
  status: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout:(state,action)=>{
      state.user=null;
      localStorage.removeItem('token')
    }
  },

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

    //current user
    [userCurrent.pending]: (state) => {
      state.status = "loading";
    },
    [userCurrent.fulfilled]: (state, action) => {
      state.status = "success";
      //console.log("=========",action.payload);
      state.user = action.payload?.user;
      return state;
    },
    [userCurrent.rejected]: (state) => {
      state.status = "fail";
    },
    //adduser
    [createUser.pending]: (state) => {
      state.status = "loading";
    },
    [createUser.fulfilled]: (state, action) => {
      state.status = "fullfieled";
      state.user = [action.payload.user, ...state.user];
      return state;
    },
    [createUser.rejected]: (state) => {
      state.status = "failed";
    },
    //update
    [updateUser.pending]: (state) => {
      state.status = "loading";
    },
    [updateUser.fulfilled]: (state, action) => {
      state.status = "fullfieled";
    

    },
    [updateUser.rejected]: (state) => {
      state.status = "failed";
    },
  },
});
export const {logout}=userSlice.actions;
export default userSlice.reducer;
