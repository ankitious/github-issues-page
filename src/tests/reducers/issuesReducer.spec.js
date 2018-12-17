import { issuesData } from '../../reducers/issuesReducer';
import { FETCH_ISSUES_FAILURE, FETCH_ISSUES_REQUEST, FETCH_ISSUES_SUCCESS } from '../../actions/constants';

const initialState = {
  fetching: false,
  issues: [],
  error: null,
};


describe('Issues reducer', () => {
  it('should return the initial state', () => {
    expect(issuesData(undefined, initialState)).toEqual(initialState);
  });

  it('should handle FETCH_ISSUES_REQUEST', () => {
    expect(issuesData(initialState, {
      type: FETCH_ISSUES_REQUEST,
    })).toEqual({
      fetching: true,
      issues: [],
      error: null,
    });
  });

  it('should handle FETCH_ISSUES_SUCCESS', () => {
    expect(issuesData({
      fetching: true,
      issues: [],
      error: null,
    }, {
      type: FETCH_ISSUES_SUCCESS,
      issues: ['issue-1', 'issue-2'],
    })).toEqual({
      fetching: false,
      issues: ['issue-1', 'issue-2'],
      error: null,
    });
  });

  it('should handle FETCH_ISSUES_FAILURE', () => {
    expect(issuesData({
      fetching: true,
      issues: [],
      error: null,
    }, {
      type: FETCH_ISSUES_FAILURE,
      error: 'error occured!',
    })).toEqual({
      fetching: false,
      issues: initialState,
      error: 'error occured!',
    });
  });
});
