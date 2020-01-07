import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const SIGN_UP_START = "SIGN_UP_START";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILED = "SIGN_UP_FAILED";

export const GET_USER_START = "GET_USER_START";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

export const signUp = (userInfo, history) => dispatch => {
  dispatch({ type: SIGN_UP_START });
  axios
    .post("https://essentialism-2.herokuapp.com/api/auth/register", userInfo)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: SIGN_UP_SUCCESS, payload: res.data });
      console.log(history);
      history.push("/onboarding/initial_values");
    })
    .catch(err => dispatch({ type: SIGN_UP_FAILED, payload: err.message }));
};

export const login = (userInfo, history) => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post("https://essentialism-2.herokuapp.com/api/auth/login", userInfo)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });

      history.push("/dashboard");
    })
    .catch(err => dispatch({ type: LOGIN_FAILED }));
};
