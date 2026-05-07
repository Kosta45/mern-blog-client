import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: {
    items: {},
    status: "loading",
  },
  tags: {
    items: [],
    status: "loading",
  },
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default postSlice.reducer;
