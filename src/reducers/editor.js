import { 
  CHANGE_VALUE, ADD_FIELD, DELETE_FIELD,
  SAVE_TASK_SUCCESS, SAVE_TASK_REQUEST,
  SAVE_TASK_FAILURE, CHANGE_PRIVATE,
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
    case CHANGE_PRIVATE:
      return {
        ...state,
        isPrivate: action.checked,
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
        link: '',
      };
    case SAVE_TASK_SUCCESS:
      return {
        ...state,
        isSaving: false,
        link: action.link,
      };
    case SAVE_TASK_FAILURE:
      return {
        ...state,
        isSaving: false,
      };
    default:
      return state;
  }
};

export default editor;