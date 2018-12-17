import axios from 'axios';

export function fetchIssueDetail(url) {
  return axios({
    method: 'get',
    url,
  });
}
