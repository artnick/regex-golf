import { CHANGE_VALUE, ADD_FIELD, DELETE_FIELD } from '../actions';

const initialState = { 
  match: [''], 
  noMatch: [''], 
  isPrivate: false,
};

const editor = (state = initialState, action) => {
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
    case DELETE_FIELD:
      return {
        ...state,
        [action.title]: [...state[action.title].slice(0, action.index),
          ...state[action.title].slice(action.index + 1)],
      };
    default:
      return state;
  }
};

export default editor;