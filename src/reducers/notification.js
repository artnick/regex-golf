import { SHOW_NOTIFICATION } from '../actions';

const initialState = '';

const notification = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return action.notification;
    default:
      return state;
  }
};

export default notification;