export const INITIAL_COUNTRIES_STATE = {
  loading: false,
  data: [],
  error: null,
};

/* ActionTypes */
const API_CALL_STARTED = "API_CALL_STARTED";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILED = "API_CALL_FAILED";

/* Actions / ActionCreators */
export const startLoadingCountries = () => {
  return { type: API_CALL_STARTED };
};

export const successtLoadingCountries = (countries) => {
  return {
    type: API_CALL_SUCCESS,
    payload: countries,
  };
};

export const failedtLoadingCountries = (error) => {
  return { type: API_CALL_FAILED, payload: error };
};

/* Reducer */
const countryReducer = (state, action) => {
  switch (action.type) {
    case API_CALL_STARTED:
      return {
        ...INITIAL_COUNTRIES_STATE,
        loading: true,
      };
    case API_CALL_SUCCESS:
      return {
        ...INITIAL_COUNTRIES_STATE,
        data: action.payload,
      };
    case API_CALL_FAILED:
      return {
        ...INITIAL_COUNTRIES_STATE,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default countryReducer;
