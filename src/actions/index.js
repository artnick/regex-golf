export const CHANGE_VALUE = 'CHANGE_VALUE';
export const ADD_FIELD = 'ADD_FIELD';
export const DELETE_FIELD = 'DELETE_FIELD';
export const REQUEST_SAVING_TASK = 'REQUEST_SAVING_TASK';
export const RECEIVE_SAVING_TASK = 'RECEIVE_SAVING_TASK';

export const CHANGE_PRIVATE = 'CHANGE_PRIVATE';

const requestUrl = 'https://regex-golf-server.herokuapp.com/task';
const separator = '%26';

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


const requestSavingTask = () => {
  return {
    type: REQUEST_SAVING_TASK,
  };
};

const receiveSavingTask = (id) => {
  return {
    type: RECEIVE_SAVING_TASK,
    id,
  };
};

export function saveTask() {
  return (dispatch, getState) => {
    dispatch(requestSavingTask());

    const task = getState().editor;
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
    return fetch(requestUrl, init)
      .then(response => response.json())
      .then(json => dispatch(receiveSavingTask(json._id)))
      .catch(function(error) {  
        console.log('Request failed', error);  
      });
  };
}

export const changePrivate = (checked) => {
  return {
    type: CHANGE_PRIVATE,
    checked,
  };
};