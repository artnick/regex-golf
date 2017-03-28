import React from 'react';

const CheckBox = ({ title, checked, onChange }) => (
  <label>
    <input
      type="checkbox"
      checked={checked}
      onChange={(event) => onChange(event.target.checked)} 
    />
    {title}
  </label>
);

CheckBox.propTypes = {
  title: React.PropTypes.string,
  checked: React.PropTypes.bool,
  onChange: React.PropTypes.func,
};

export default CheckBox;