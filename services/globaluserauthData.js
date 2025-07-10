import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const globalauthSlice = createSlice({
  name: "globalauth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
  },
});

// ✅ FIXED EXPORT
export const { setCredentials, logoutUser } = globalauthSlice.actions;
export default globalauthSlice.reducer;
