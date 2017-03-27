import { combineReducers } from 'redux';
import editor from './editor';


const task = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const reducer = combineReducers({
  editor,
  task,
});

export default reducer;