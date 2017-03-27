import React from 'react';

const Field = ({ value, onChange, onFocus, onDelete, isLast }) => (
  <div>
    <input 
      type="text" 
      value={value} 
      onChange={(event) => onChange(event.target.value)}
      onFocus={isLast ? onFocus : () => null}
    />
    <button className={isLast ? 'hidden' : ''} onClick={onDelete}>x</button>
  </div>
);

Field.propTypes = {
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onFocus: React.PropTypes.func,
  onDelete: React.PropTypes.func,
  isLast: React.PropTypes.bool,
};

export default Field;