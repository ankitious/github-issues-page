import axios from 'axios';
import { GIT_ISSUE_ENDPOINT } from './constants';

export function fetchIssues() {
  return axios({
    method: 'get',
    url: GIT_ISSUE_ENDPOINT,
  });
}
