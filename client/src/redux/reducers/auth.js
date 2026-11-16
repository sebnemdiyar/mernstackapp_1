import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: null,
  },
  reducers: {
    register: (state, action) => {
      localStorage.setItem("auth", JSON.stringify(action.payload));
      state.auth = action.payload;
    },
    login: (state, action) => {
      localStorage.setItem("auth", JSON.stringify(action.payload));
      state.auth = action.payload;
    },
    logout: (state) => {
      localStorage.clear();
      state.auth = null;
    },
  },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
