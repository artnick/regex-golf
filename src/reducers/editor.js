import { 
  CHANGE_VALUE, ADD_FIELD, DELETE_FIELD,
  REQUEST_SAVING_TASK, RECEIVE_SAVING_TASK,
  CHANGE_PRIVATE, REQUEST_URL,
} from '../actions';

const initialState = { 
  match: [''], 
  noMatch: [''], 
  isPrivate: false,
  isSaving: false,
  link: '',
};

function updateValueInArray(array, action) {
  return array.map( (value, index) => {
    if(index !== action.index) {
      return value;
    }
    return action.value;
  });
}

function removeItem(array, action) {
  return [
    ...array.slice(0, action.index),
    ...array.slice(action.index + 1),
  ];
}

const editor = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.title]: updateValueInArray(state[action.title], action),
      };
    case ADD_FIELD:
      return {
        ...state,
        [action.title]: [...state[action.title], ''],
      };
    case DELETE_FIELD:
      return {
        ...state,
        [action.title]: removeItem(state[action.title], action),
      };
    case REQUEST_SAVING_TASK:
      return {
        ...state,
        isSaving: true,
      };
    case RECEIVE_SAVING_TASK:
      return {
        ...state,
        isSaving: false,
        link: REQUEST_URL + '/' + action.id,
      };
    case CHANGE_PRIVATE:
      return {
        ...state,
        isPrivate: action.checked,
      };
    default:
      return state;
  }
};

export default editor;