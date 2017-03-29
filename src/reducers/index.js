import { combineReducers } from 'redux';
import editor from './editor';
import task from './task';

const reducer = combineReducers({
  editor,
  task,
});

export default reducer;