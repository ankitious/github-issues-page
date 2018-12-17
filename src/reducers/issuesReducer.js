import {
  FETCH_ISSUES_FAILURE,
  FETCH_ISSUES_REQUEST,
  FETCH_ISSUES_SUCCESS,
} from '../actions/constants';

const initialState = {
  fetching: false,
  issues: [],
  error: null,
};

export function issuesData(state = initialState, action) {
  switch (action.type) {
    case FETCH_ISSUES_REQUEST:
      return { ...state, fetching: true, error: null };
    case FETCH_ISSUES_SUCCESS:
      return { ...state, fetching: false, issues: action.issues };
    case FETCH_ISSUES_FAILURE:
      return {
        ...state, fetching: false, issues: initialState, error: action.error,
      };
    default:
      return state;
  }
}
