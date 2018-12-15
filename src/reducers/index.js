import { combineReducers } from 'redux';
import { API_CALL_FAILURE, API_CALL_REQUEST, API_CALL_SUCCESS } from '../actions';

const initialState = {
  fetching: false,
  issues: [],
  error: null,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, issues: action.issues };
    case API_CALL_FAILURE:
      return {
        ...state, fetching: false, issues: [], error: action.error,
      };
    default:
      return state;
  }
}


//const rootReducer = combineReducers({ reducer });

export default reducer;
