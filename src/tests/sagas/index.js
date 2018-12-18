import test from 'tape';
import { call, fork, put } from 'redux-saga/effects';
import {
  fetchGithubIssues, fetchGithubRepoInfo, watcherSaga, workerSaga,
} from '../../sagas/index';
import * as actions from '../../actions/index';
import { FETCH_ISSUES_REQUEST, FETCH_REPOINFO_REQUEST } from '../../actions/constants';
import { fetchIssues } from '../../api/fetchIssues';
import { fetchGitIssuesSuccess } from '../../actions/index';
import { fetchGitIssuesFailure } from '../../actions/index';
import { fetchRepoInfo } from '../../api/fetchRepoInfo';
import { fetchRepoInfoSuccess } from '../../actions/index';
import { fetchRepoInfoFailure } from '../../actions/index';
import rootSaga from '../../sagas/index';


test('issues call workerSaga success ', (t) => {
  const fetchIssues = () => ({ data: ['issue 1', 'issue 2', 'issue 3'] });
  const generator = workerSaga(fetchIssues, actions.fetchGitIssuesSuccess, actions.fetchGitIssuesFailure);
  t.deepEqual(generator.next().value, call(fetchIssues), 'must call fetchIssues fn');
  t.deepEqual(
    generator.next(fetchIssues().data).value,
    put(actions.fetchGitIssuesSuccess()),
    'must dispatch a success action with issues',
  );
  t.ok(generator.next().done, 'must finish');
  t.end();
});


test('issues call workerSaga failure', (t) => {
  const error = new Error('error');
  const fetchIssues = () => (error);
  const generator = workerSaga(fetchIssues, actions.fetchGitIssuesSuccess, actions.fetchGitIssuesFailure);
  t.deepEqual(generator.next().value, call(fetchIssues), 'must call fetchIssues fn');
  t.deepEqual(
    generator.next(fetchIssues().data).value,
    put(actions.fetchGitIssuesFailure(error)),
    'must dispatch a failure action with issues',
  );
  t.ok(generator.next().done, 'must finish');
  t.end();
});


test('repoinfo call workerSaga success ', (t) => {
  const fetchRepoInfo = () => ({
    data: {
      id: 10270250,
      name: 'react',
      full_name: 'facebook/react',
      network_count: 21349,
      subscribers_count: 6582,
    },
  });

  const generator = workerSaga(fetchRepoInfo, actions.fetchRepoInfoSuccess, actions.fetchRepoInfoFailure);
  t.deepEqual(generator.next().value, call(fetchRepoInfo), 'must call fetchRepoInfo fn');
  t.deepEqual(
    generator.next(fetchRepoInfo().data).value,
    put(actions.fetchRepoInfoSuccess()),
    'must dispatch a success action with repo information',
  );
  t.ok(generator.next().done, 'must finish');
  t.end();
});


test('repoinfo call workerSaga failure', (t) => {
  const error = new Error('error');
  const fetchRepoInfo = () => (error);
  const generator = workerSaga(fetchRepoInfo, actions.fetchRepoInfoSuccess, actions.fetchRepoInfoFailure);
  t.deepEqual(generator.next().value, call(fetchRepoInfo), 'must call fetchRepoInfo fn');
  t.deepEqual(
    generator.next(fetchRepoInfo().data).value,
    put(actions.fetchRepoInfoFailure(error)),
    'must dispatch a failure action with issues',
  );
  t.ok(generator.next().done, 'must finish');
  t.end();
});

test('fetchGithubIssues Saga', (t) => {
  const generator = fetchGithubIssues();
  t.deepEqual(
    generator.next().value,
    call(watcherSaga, FETCH_ISSUES_REQUEST, fetchIssues, fetchGitIssuesSuccess, fetchGitIssuesFailure),
    'delegates to watcherSaga to get issues',
  );
  t.ok(generator.next().done, 'must finish');
  t.end();
});

test('fetchGithubRepoInfo Saga', (t) => {
  const generator = fetchGithubRepoInfo();
  t.deepEqual(
    generator.next().value,
    call(watcherSaga, FETCH_REPOINFO_REQUEST, fetchRepoInfo, fetchRepoInfoSuccess, fetchRepoInfoFailure),
    'delegates to watcherSaga to get repo information',
  );
  t.ok(generator.next().done, 'must finish');
  t.end();
});


test('root Saga', (t) => {
  const generator = rootSaga();
  t.deepEqual(
    generator.next().value,
    fork(fetchGithubIssues),
    'go to fetchGithubIssues to fetch github issues for that repository',
  );
  t.deepEqual(
    generator.next().value,
    fork(fetchGithubRepoInfo),
    'go to fetchGithubRepoInfo to fetch github repository information for that repository',
  );
  t.ok(generator.next().done, 'must finish');
  t.end();
});

