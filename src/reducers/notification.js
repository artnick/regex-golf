import { SHOW_NOTIFICATION, SAVE_TASK_FAILURE } from '../actions';

const initialState = '';

const notification = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TASK_FAILURE:
      return 'Saving failure'; 
    case SHOW_NOTIFICATION:
      return action.notification;
    default:
      return state;
  }
};

export default notification;