import { combineReducers } from 'redux';
import { CHANGE_VALUE, ADD_FIELD } from '../actions';


const editor = (state = { match: [''], noMatch: ['']}, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.title]: state[action.title].map( (value, index) => {
          if(index !== action.index) {
            return value;
          }
          return action.value;
        }),
      };
    case ADD_FIELD:
      return {
        ...state,
        [action.title]: [...state[action.title], ''],
      };
    default:
      return state;
  }
};

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