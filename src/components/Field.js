import React from 'react';

const Field = ({ value, onChange, onFocus }) => (
  <input 
    type="text" 
    value={value} 
    onChange={(event) => onChange(event.target.value)}
    onFocus={() => onFocus()}
  />
);

Field.propTypes = {
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onFocus: React.PropTypes.func,
};

export default Field;