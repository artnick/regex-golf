export const CHANGE_VALUE = 'CHANGE_VALUE';
export const ADD_FIELD = 'ADD_FIELD';

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