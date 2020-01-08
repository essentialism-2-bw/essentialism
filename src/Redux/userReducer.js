import {
  LOGIN_START,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILED
} from "./userActions";

const initialState = {
  error: null,
  isFetching: false,
  currentUser: {}
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_UP_START:
      return {
        ...state,
        error: null,
        isFetching: true,
        currentUser: ""
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        error: null,
        isFetching: false,
        currentUser: payload
      };
    case SIGN_UP_FAILED:
      return {
        ...state,
        error: payload,
        isFetching: true,
        currentUser: ""
      };
    case LOGIN_START:
      return {
        ...state,
        isFetching: true,
        error: null,
        currentUser: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        isFetching: false,
        currentUser: payload
      };
    case LOGIN_FAILED:
      return {
        ...state,
        error: "Wrong Email Or Password",
        isFetching: false,
        currentUser: ""
      };

    default:
      return state;
  }
};
