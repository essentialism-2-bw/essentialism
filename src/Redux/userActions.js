import axios from "axios";
import axiosWithAuth from "../Utils/axiosWithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const SIGN_UP_START = "SIGN_UP_START";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILED = "SIGN_UP_FAILED";

export const GET_USER_START = "GET_USER_START";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

export const SEND_STATS_START = "SEND_STATS_START";
export const SEND_STATS_SUCCESS = "SEND_STATS_SUCCESS";
export const SEND_STATS_FAILED = "SEND_STATS_FAILED";

export const GET_VALUES_SUCCESS = "GET_VALUES_SUCCESS";
export const GET_VALUES_FAILED = "GET_VALUES_FAILED";

export const GET_PROJECTS_SUCCESS = "GET_PROJECTS_SUCCESS";
export const GET_PROJECTS_FAILED = "GET_PROJECTS_FAILED";

export const signUp = (userInfo, history) => dispatch => {
  dispatch({ type: SIGN_UP_START });
  axios
    .post(
      "https://essentialism-test-01.herokuapp.com/api/auth/register",
      userInfo
    )
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data.id);
      dispatch({ type: SIGN_UP_SUCCESS, payload: res.data });
      console.log(history);
      history.push("/onboarding/initial_values");
    })
    .catch(err => dispatch({ type: SIGN_UP_FAILED, payload: err.message }));
};

export const login = (userInfo, history) => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post("https://essentialism-test-01.herokuapp.com/api/auth/login", userInfo)
    .then(res => {
      console.log("login response", res.data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data.user_id);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });

      history.push("/dashboard");
    })
    .catch(err => dispatch({ type: LOGIN_FAILED }));
};

export const getValues = userId => dispatch => {
  axiosWithAuth()
    .get(`api/usrValues/${userId}`)
    .then(res => {
      console.log(res);
      dispatch({ type: GET_VALUES_SUCCESS, payload: res.data });
      // get value success
    })
    .catch(error => {
      console.log("error");
      dispatch({ type: GET_VALUES_FAILED, payload: error.error });
    });
};

export const getProjects = userId => dispatch => {
  axiosWithAuth()
    .get(`api/projects/${userId}`)
    .then(res => {
      console.log(res);
      dispatch({ type: GET_PROJECTS_SUCCESS, payload: res.data });
      // get value success
    })
    .catch(error => {
      console.log("error");
      dispatch({ type: GET_PROJECTS_FAILED, payload: error.error });
    });
};
