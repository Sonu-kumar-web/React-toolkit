import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("users", async () => {
  // createAsyncThunk return three action
  //   users/pending
  //   users/fullfilled
  //   users/rejected
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  } catch (error) {
    return error;
  }
});
