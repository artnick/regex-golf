import { 
  FETCH_TASK_REQUEST, FETCH_TASK_SUCCES, 
} from '../actions';

const initialState = { 
  matchList: [''], 
  noMatchList: [''], 
  isSaving: false,
  link: '',
};

const task = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASK_REQUEST:
      return {
        ...state,
        matchList: [],
        noMatchList: [],
        isFetching: true,
      };
    case FETCH_TASK_SUCCES:
      return {
        ...state,
        matchList: action.match,
        noMatchList: action.noMatch,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default task;