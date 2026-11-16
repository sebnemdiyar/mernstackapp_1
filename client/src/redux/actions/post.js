import axios from "axios";
import { toast } from "react-toastify";
import { getPosts, createPost, updatePost, deletePost } from "../reducers/post";

export const getPostsAction = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:5000/getPosts");

    // slice action'ını çağır
    dispatch(getPosts(data));
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data?.msg || "Bir hata oluştu", {
      position: "top-right",
      autoClose: 5000,
    });
  }
};

export const createPostAction = (postData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:5000/createPost",
      postData,
    );

    dispatch(createPost(data));
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data?.msg || "Bir hata oluştu", {
      position: "top-right",
      autoClose: 5000,
    });
  }
};

export const updatePostAction = (id, postData) => async (dispatch) => {
  try {
    const { data } = await axios.patch(
      `http://localhost:5000/updatePost/${id}`,
      postData,
    );

    dispatch(updatePost(data));
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data?.msg || "Bir hata oluştu", {
      position: "top-right",
      autoClose: 5000,
    });
  }
};

export const deletePostAction = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/deletePost/${id}`);

    dispatch(deletePost(id));
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data?.msg || "Bir hata oluştu", {
      position: "top-right",
      autoClose: 5000,
    });
  }
};
