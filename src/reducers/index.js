import { combineReducers } from 'redux';

const testReducer = (state, action) => 'test reducer';
const rootReducer = combineReducers({ testReducer });

export default rootReducer;
