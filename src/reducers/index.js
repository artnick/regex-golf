import { combineReducers } from 'redux';
import editor from './editor';
import task from './task';
import notification from './notification';

const reducer = combineReducers({
  editor,
  task,
  notification,
});

export default reducer;