import axios from 'axios';


const BASE_URL = 'https://api.github.com';


const GIT_ISSUE_ENDPOINT = `${BASE_URL}/repos/facebook/react/issues`;

export function fetchIssues() {
  return axios({
    method: 'get',
    url: GIT_ISSUE_ENDPOINT,
  });
}
