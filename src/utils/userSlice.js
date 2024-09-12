import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "Default Name",
  },
  reducers: {
    updateName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;
