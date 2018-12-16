import axios from 'axios';
import { GIT_REPO_INFO } from './constants';

export function fetchRepoInfo() {
  return axios({
    method: 'get',
    url: GIT_REPO_INFO,
  });
}
