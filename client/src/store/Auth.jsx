import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: [],
  islogined: false,
  loading: true,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoginStatus: (state, action) => {
      state.islogined = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setUser, setLoginStatus, setLoading, setToken } =
  authSlice.actions;

export default authSlice.reducer;
