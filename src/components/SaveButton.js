import React from 'react';

const SaveButton = ({ onSave }) => (
  <button 
    onClick={(event) => onSave(event.target.value)}
  >
    Save
  </button>
);

SaveButton.propTypes = {
  onSave: React.PropTypes.func,
};

export default SaveButton;