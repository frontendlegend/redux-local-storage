import {combineReducers} from 'redux';
import loggedInOut from './log';
import formCollected from './formInfo';

const userData = combineReducers({
  loggedInOut,
  formCollected
});

export default userData;