import axios from "axios";
import { toast } from "react-toastify";
import { register, login } from "../reducers/auth"; // slice action'ları import et

export const registerAction = (authData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:5000/register",
      authData,
    );

    // Redux Toolkit slice'daki register action'ı dispatch et
    dispatch(register(data));

    // Anasayfaya yönlendir
    window.location = "/";
  } catch (error) {
    toast(error.response.data.msg, {
      position: "top-right",
      autoClose: 5000,
    });
  }
};

export const loginAction = (authData) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:5000/login", authData);

    // Redux Toolkit slice'ımızdaki login action'ını dispatch ediyoruz
    dispatch(login(data));

    // Anasayfaya yönlendirme
    window.location = "/";
  } catch (error) {
    toast(error.response.data.msg, {
      position: "top-right",
      autoClose: 5000,
    });
  }
};
