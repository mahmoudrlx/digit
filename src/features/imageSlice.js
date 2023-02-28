import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  link: "",
  img: "",
  alt: "",
};

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    image: (state, action) => {
      state.fullName = action.payload.fullName;
      state.link = action.payload.link;
      state.img = action.payload.img;
    },
  },
});

export const { image } = imageSlice.actions;
export default imageSlice.reducer;
