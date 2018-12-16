import { combineReducers } from 'redux';
import {
  API_CALL_FAILURE,
  API_CALL_REQUEST,
  API_CALL_SUCCESS, FETCH_REPOINFO_FAILURE,
  FETCH_REPOINFO_REQUEST,
  FETCH_REPOINFO_SUCCESS
} from "../actions/constants";
import {repoInfoData} from './repoInfoReducer';
import {issuesData} from './issuesReducer';



const rootReducer = combineReducers({ issuesData, repoInfoData });

export default rootReducer;
