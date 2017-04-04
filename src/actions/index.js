export const CHANGE_VALUE = 'CHANGE_VALUE';
export const ADD_FIELD = 'ADD_FIELD';
export const DELETE_FIELD = 'DELETE_FIELD';
export const CHANGE_PRIVATE = 'CHANGE_PRIVATE';
export const SAVE_TASK_REQUEST = 'SAVE_TASK_REQUEST';
export const SAVE_TASK_SUCCES = 'SAVE_TASK_SUCCES';

export const FETCH_TASK_REQUEST = 'FETCH_TASK_REQUEST';
export const FETCH_TASK_SUCCES = 'FETCH_TASK_SUCCES';
export const CHANGE_REGEXP = 'CHANGE_REGEXP';

export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';


const REQUEST_URL = 'https://regex-golf-server.herokuapp.com/task';
const separator = '%26';

export const showNotification = (notification) => {
  return {
    type: SHOW_NOTIFICATION,
    notification,
  };
};

export const hideNotification = () => {
  return {
    type: SHOW_NOTIFICATION,
    notification: '',
  };
};

export const changeValue = (value, index, title) => {
  return {
    type: CHANGE_VALUE,
    value,
    index,
    title,
  };
};

export const addField = (title) => {
  return {
    type: ADD_FIELD,
    title,
  };
};

export const deleteField = (index, title) => {
  return {
    type: DELETE_FIELD,
    index,
    title,
  };
};

export const changePrivate = (checked) => {
  return {
    type: CHANGE_PRIVATE,
    checked,
  };
};

const requestSavingTask = () => {
  return {
    type: SAVE_TASK_REQUEST,
  };
};

const receiveSavingTask = (id) => {
  return {
    type: SAVE_TASK_SUCCES,
    link: 'task/' + id,
  };
};

export function saveTask() {
  return (dispatch, getState) => {

    const task = getState().editor;

    if(task.match.filter((value) => !!value).length == 0) {
      dispatch(showNotification('Need to add at least one no empty match test'));
      return;
    }

    const matchList = task.match.slice(0,-1).join(separator);
    const noMatchList = task.noMatch.slice(0,-1).join(separator);
    const isPrivate = task.isPrivate;

    const body =`isPrivate=${isPrivate}`.concat(
      matchList.length ? `&match=${matchList}` : '',
      noMatchList.length ? `&nomatch=${noMatchList}` : ''
    );

    const init = {  
      method: 'post',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: body,
    };

    dispatch(requestSavingTask());
    return fetch(REQUEST_URL, init)
      .then(response => response.json())
      .then(json => dispatch(receiveSavingTask(json._id)))
      .catch(function(error) {  
        console.log(error); 
        dispatch(showNotification('Saving failure'));  
      });
  };
}


const requestTask = () => {
  return {
    type: FETCH_TASK_REQUEST,
  };
};

const receiveTask = (json) => {
  return {
    type: FETCH_TASK_SUCCES,
    match: (json.match ? json.match.slice() : []),
    noMatch: (json.nomatch ? json.nomatch.slice() : []),
  };
};

export function fetchTask(id) {
  return (dispatch) => {
    dispatch(requestTask());
    return fetch(REQUEST_URL + '/' + id)
      .then(response => response.json())
      .then(json => dispatch(receiveTask(json)))
      .catch(function(error) { 
        console.log(error); 
        dispatch(showNotification('Task not found'));  
      });
  };
}

export const changeRegExp = (value) => {
  return {
    type: CHANGE_REGEXP,
    value,
  };
};