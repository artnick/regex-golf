import { 
  CHANGE_VALUE, ADD_FIELD, DELETE_FIELD,
  SAVE_TASK_SUCCES, SAVE_TASK_REQUEST,
  CHANGE_PRIVATE,
} from '../actions';
import { removeItem, updateValueInArray } from '../utils/';

const initialState = { 
  match: [''], 
  noMatch: [''], 
  isPrivate: false,
  isSaving: false,
  link: '',
};


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
    case SAVE_TASK_REQUEST:
      return {
        ...state,
        isSaving: true,
      };
    case SAVE_TASK_SUCCES:
      return {
        ...state,
        isSaving: false,
        link: action.link,
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