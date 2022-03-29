import { createSlice } from "@reduxjs/toolkit";

import { getUsers } from "../../actions";

const usersReducre = createSlice({
  name: "user", // This name will includes in Action name

  // Initial Value
  initialState: {
    users: [],
    loader: false,
    error: {},
  },

  // Actions
  // React toolkit automatic create the action type
  // Here action_type will be "user/addUser" i.e user=> name and adduser is action name

  // Include normal actions
  reducers: {
    addUser: (state, action) => {
      console.log("plyload", action);
      state.users = [...state.users, action.payload];
    },
  },

  // it contains Async actions
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      console.log("pending", action);
      state.loader = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      console.log("fulfilled", action);
      state.loader = false;
      state.users = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      console.log("rejected", action);
      state.loader = false;
      state.error = action.payload;
    },
  },
});

export const { addUser } = usersReducre.actions;

export default usersReducre.reducer;
