import {
  FETCH_STATS_FAILED,
  FETCH_STATS_SUCCESS,
  FETCH_STATS_START,
  SEND_STATS_START,
  SEND_STATS_SUCCESS,
  SEND_STATS_FAILED
} from "./actions";
import { calculateStats } from "./actions";
import { mealPlan } from "./actions";

const initialState = {
  userStatsObj: {},
  isFetching: false,
  error: null,
  totalCalories: "",
  proteinGrams: "",
  carbsGrams: "",
  fatsGrams: "",
  Macros: {}
};
const initialState1 = {
  userStatsObj: {},
  isFetching: false,
  error: null
};

export const userStatsReducer = (state = initialState1, { type, payload }) => {
  switch (type) {
    case SEND_STATS_START:
      return {
        ...state,
        isFetching: true,
        error: null,
        userStatsObj: {}
      };
    case SEND_STATS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        userStatsObj: payload
      };
    case SEND_STATS_FAILED:
      return {
        ...state,
        isFetching: false,
        error: payload,
        userStatsObj: {}
      };
    default:
      return state;
  }
};
