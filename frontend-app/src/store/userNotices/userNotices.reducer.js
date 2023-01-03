import {
  ERROR,
  GET_USER_NOTICES,
  LOADING,
  POST_USER_NOTICES,
} from "./userNotices.types";

const initialState = {
  isError: false,
  isLoading: false,
  data: [],
  noticesData: [],
};

export const userNoticeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ERROR: {
      return {
        ...state,
        isError: true,
      };
    }
    case POST_USER_NOTICES: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
      };
    }
    case GET_USER_NOTICES: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        noticesData: payload,
      };
    }
    default: {
      return state;
    }
  }
};
