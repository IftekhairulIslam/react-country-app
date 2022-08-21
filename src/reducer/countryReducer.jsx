export const INITIAL_COUNTRIES_STATE = {
  loading: false,
  data: [],
  error: null,
};

export const COUNTRIES_ACTION_TYPE = {
  API_CALL_STARTED: "API_CALL_STARTED",
  API_CALL_SUCCESS: "API_CALL_SUCCESS",
  API_CALL_FAILED: "API_CALL_FAILED",
};

export const countryReducer = (state, action) => {
  switch (action.type) {
    case COUNTRIES_ACTION_TYPE.API_CALL_STARTED:
      return {
        ...INITIAL_COUNTRIES_STATE,
        loading: true,
      };
    case COUNTRIES_ACTION_TYPE.API_CALL_SUCCESS:
      return {
        ...INITIAL_COUNTRIES_STATE,
        data: action.payload,
      };
    case COUNTRIES_ACTION_TYPE.API_CALL_FAILED:
      return {
        ...INITIAL_COUNTRIES_STATE,
        error: action.payload,
      };
    default:
      return state;
  }
};
