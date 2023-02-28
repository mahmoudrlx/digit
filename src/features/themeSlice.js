import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeMode: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeMode } = themeSlice.actions;

export default themeSlice.reducer;
