export const API_CALL_REQUEST = 'API_CALL_REQUEST';
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS';
export const API_CALL_FAILURE = 'API_CALL_FAILURE';

export function getGitIssues() {
  return {
    type: API_CALL_REQUEST,
  };
}


export function getGitIssuesSuccess(issues) {
  return {
    type: API_CALL_SUCCESS,
    issues,
  };
}


export function getGitIssuesFailure(error) {
  return {
    type: API_CALL_FAILURE,
    error,
  };
}
