import { ERROR, GETUSER, LOADING, POSTUSER } from "./users.types";

const initialState = {
  isError: false,
  isLoading: false,
  data: [],
};

export const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GETUSER: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
      };
    }
    case POSTUSER: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
      };
    }
    case ERROR: {
      return {
        ...state,
        isError: true,
      };
    }
    case LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    default: {
      return state;
    }
  }
};
