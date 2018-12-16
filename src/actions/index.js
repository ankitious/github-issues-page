import {
  API_CALL_FAILURE,
  API_CALL_REQUEST,
  API_CALL_SUCCESS, FETCH_REPOINFO_FAILURE,
  FETCH_REPOINFO_REQUEST,
  FETCH_REPOINFO_SUCCESS,
} from './constants';


export function fetchGitIssues() {
  return {
    type: API_CALL_REQUEST,
  };
}


export function fetchGitIssuesSuccess(issues) {
  return {
    type: API_CALL_SUCCESS,
    issues,
  };
}


export function fetchGitIssuesFailure(error) {
  return {
    type: API_CALL_FAILURE,
    error,
  };
}


export function fetchRepoInfo() {
  return {
    type: FETCH_REPOINFO_REQUEST,
  };
}


export function fetchRepoInfoSuccess(repoInfo) {
  return {
    type: FETCH_REPOINFO_SUCCESS,
    repoInfo,
  };
}


export function fetchRepoInfoFailure(error) {
  return {
    type: FETCH_REPOINFO_FAILURE,
    error,
  };
}
