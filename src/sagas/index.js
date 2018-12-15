import { takeLatest, call, put } from 'redux-saga/effects';
import { getGitIssuesFailure, getGitIssuesSuccess } from '../actions';
import { fetchIssues } from '../api/fetchIssues';


function* workerSaga() {
  try {
    const response = yield call(fetchIssues);
    const issues = response.data;
    yield put(getGitIssuesSuccess(issues));
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put(getGitIssuesFailure(error));
  }
}

export function* watcherSaga() {
  yield takeLatest('API_CALL_REQUEST', workerSaga);
}
