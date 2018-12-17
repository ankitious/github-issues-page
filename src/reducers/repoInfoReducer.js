import {
  FETCH_REPOINFO_FAILURE,
  FETCH_REPOINFO_REQUEST,
  FETCH_REPOINFO_SUCCESS,
} from '../actions/constants';

const initialState = {
  fetching: false,
  repoInfo: {},
  error: null,
};

export function repoInfoData(state = initialState, action) {
  switch (action.type) {
    case FETCH_REPOINFO_REQUEST:
      return { ...state, fetching: true, error: null };
    case FETCH_REPOINFO_SUCCESS:
      return { ...state, fetching: false, repoInfo: action.repoInfo };
    case FETCH_REPOINFO_FAILURE:
      return {
        ...state, fetching: false, repoInfo: initialState, error: action.error,
      };
    default:
      return state;
  }
}
