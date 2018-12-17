import { getQueryStringValue } from '../components/commons/getQueryStringValue';

export const WEB_URL = 'https://github.com';

export const BASE_URL = 'https://api.github.com';

export const OWNER = getQueryStringValue('owner') || 'facebook';

export const REPO = getQueryStringValue('repo') || 'react';

export const GIT_REPO_INFO = `${BASE_URL}/repos/${OWNER}/${REPO}`;

export const GIT_ISSUE_ENDPOINT = `${GIT_REPO_INFO}/issues`;
