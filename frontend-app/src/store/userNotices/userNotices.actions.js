import axios from "axios";
import {
  ERROR,
  GET_USER_NOTICES,
  LOADING,
  POST_USER_NOTICES,
} from "./userNotices.types";

export const postUserNotices = (data) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.post(
      "https://noticeboar.onrender.com/userNotice",
      data
    );
    console.log(res.data);
    dispatch({ type: POST_USER_NOTICES, payload: res.data });
  } catch (e) {
    console.log(e);
    return {
      type: ERROR,
    };
  }
};

export const getUserNotice = () => (dispatch) => {
  dispatch({ type: LOADING });
  try {
    axios.get("https://noticeboar.onrender.com/userNotice").then((res) => {
      dispatch({ type: GET_USER_NOTICES, payload: res.data });
      return res.data;
    });
  } catch (e) {
    console.log(e);
    return {
      type: ERROR,
    };
  }
};
