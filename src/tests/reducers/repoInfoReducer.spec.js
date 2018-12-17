import {
  FETCH_REPOINFO_FAILURE,
  FETCH_REPOINFO_REQUEST, FETCH_REPOINFO_SUCCESS,
} from '../../actions/constants';
import { repoInfoData } from '../../reducers/repoInfoReducer';


const initialState = {
  fetching: false,
  repoInfo: {},
  error: null,
};

describe('Repo Information reducer', () => {
  it('should return the initial state', () => {
    expect(repoInfoData(undefined, initialState)).toEqual(initialState);
  });

  it('should handle FETCH_REPOINFO_REQUEST', () => {
    expect(repoInfoData(initialState, {
      type: FETCH_REPOINFO_REQUEST,
    })).toEqual({
      fetching: true,
      repoInfo: {},
      error: null,
    });
  });

  it('should handle FETCH_REPOINFO_SUCCESS', () => {
    expect(repoInfoData({
      fetching: true,
      repoInfo: {},
      error: null,
    }, {
      type: FETCH_REPOINFO_SUCCESS,
      repoInfo: {
        id: 10270250,
        name: 'react',
        full_name: 'facebook/react',
        network_count: 21349,
        subscribers_count: 6582,
      },
    })).toEqual({
      fetching: false,
      repoInfo: {
        id: 10270250,
        name: 'react',
        full_name: 'facebook/react',
        network_count: 21349,
        subscribers_count: 6582,
      },
      error: null,
    });
  });

  it('should handle FETCH_REPOINFO_FAILURE', () => {
    expect(repoInfoData({
      fetching: true,
      repoInfo: {},
      error: null,
    }, {
      type: FETCH_REPOINFO_FAILURE,
      error: 'error occured!',
    })).toEqual({
      fetching: false,
      repoInfo: initialState,
      error: 'error occured!',
    });
  });
});
