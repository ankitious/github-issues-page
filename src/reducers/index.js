import { combineReducers } from 'redux';
import { repoInfoData } from './repoInfoReducer';
import { issuesData } from './issuesReducer';


const rootReducer = combineReducers({ issuesData, repoInfoData });

export default rootReducer;
