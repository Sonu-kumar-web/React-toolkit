import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("users", async () => {
  // createAsyncThunk return three action for resucers
  //   users/pending
  //   users/fullfilled
  //   users/rejected
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});
