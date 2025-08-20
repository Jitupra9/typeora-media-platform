import { configureStore } from "@reduxjs/toolkit";
import Auths from "./Auth";
const store = configureStore({
  reducer: {
    Auth: Auths,
  },
});

export default store;
