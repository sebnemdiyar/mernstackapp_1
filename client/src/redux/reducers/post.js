import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  reducers: {
    getPosts: (state, action) => {
      state.posts = action.payload;
    },

    createPost: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },

    updatePost: (state, action) => {
      state.posts = state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post,
      );
    },

    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
    },
  },
});

export const { getPosts, createPost, updatePost, deletePost } =
  postSlice.actions;
export default postSlice.reducer;
