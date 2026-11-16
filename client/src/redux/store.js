import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth"; // Reducer'ı içe aktar
import modalReducer from "./reducers/modal";
import postReducer from "./reducers/post"; // Post reducer'ı içe aktar

export const store = configureStore({
  reducer: {
    auth: authReducer, // Auth reducer'ını store'a bağla
    modal: modalReducer,
    posts: postReducer, // Post reducer'ı store'a bağla
  },
});

export default store;
