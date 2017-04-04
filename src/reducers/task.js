import { 
  FETCH_TASK_REQUEST, 
  FETCH_TASK_SUCCESS, 
  FETCH_TASK_FAILURE,
  CHANGE_REGEXP,
} from '../actions';

const initialState = { 
  matchList: [''], 
  noMatchList: [''], 
  isFetching: false,
  regExp: '',
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
    case FETCH_TASK_SUCCESS:
      return {
        ...state,
        matchList: action.match,
        noMatchList: action.noMatch,
        isFetching: false,
      };
    case FETCH_TASK_FAILURE:
      return {
        ...state,
        matchList: [],
        noMatchList: [],
        isFetching: false,
      };
    case CHANGE_REGEXP:
      return {
        ...state,
        regExp: action.value,
      };
    default:
      return state;
  }
};

export default task;