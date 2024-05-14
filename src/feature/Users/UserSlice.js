import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userIn: (state, action) => {
      state.currentUser = action.payload;
      // localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
    },
    userOut: (state, action) => {
      state.currentUser = null;
      // localStorage.removeItem("currentUser");
    },
  },
});

export const { userIn , userOut} = UserSlice.actions;
export default UserSlice.reducer;