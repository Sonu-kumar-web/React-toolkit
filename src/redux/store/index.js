import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import usersReducer from "../reducers/usersReducer.js";

const reducers = configureStore({
  // It containes different reducers
  reducer: {
    users: usersReducer,
  },

  //   You can use your own middleware
  middleware: [...getDefaultMiddleware()],
});

export default reducers;
