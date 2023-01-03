import axios from "axios";
import { ERROR, LOADING, POSTUSER } from "./users.types";

export const loginUser = (data) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.post(
      "https://noticeboar.onrender.com/users/login",
      data
    );
    if (res.data.errors) {
      res.data.errors.map((e) => {
        return e.msg;
      });
    } else {
      localStorage.setItem("userInfo", res.data._id);
      dispatch({ type: POSTUSER, payload: res.data });
    }
    return res.data;
  } catch (err) {
    console.log(err);
    dispatch({ type: ERROR });
  }
};
