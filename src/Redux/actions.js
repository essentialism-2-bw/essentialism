import axiosWithAuth from "../Utils/axiosWithAuth";

export const FETCH_STATS_START = "FETCH_STATS_START";
export const FETCH_STATS_SUCCESS = "FETCH_STATS_SUCCESS";
export const FETCH_STATS_FAILED = "FETCH_STATS_FAILED";

export const SEND_STATS_START = "SEND_STATS_START";
export const SEND_STATS_SUCCESS = "SEND_STATS_SUCCESS";
export const SEND_STATS_FAILED = "SEND_STATS_FAILED";

export const EDIT_STATS_START = "EDIT_STATS_START";
export const EDIT_STATS_SUCCESS = "EDIT_STATS_SUCCESS";
export const EDIT_STATS_FAILED = "EDIT_STATS_FAILED";

export const sendStats = (info, history) => dispatch => {
  dispatch({ type: SEND_STATS_START });
  axiosWithAuth()
    .post("/api/usrValues/", info)
    .then(res => {
      dispatch({ type: SEND_STATS_SUCCESS, payload: res.data });
      history.push("/dashboard");
    })
    .catch(err => console.log(err));
};
