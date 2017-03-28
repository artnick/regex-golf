import React from 'react';
import SaveButton from '../components/SaveButton';
import CheckBox from '../components/CheckBox';

const Toolbar = ({ onSave, isPrivate, onChangePrivate }) => (
  <div>
    <CheckBox title='Private' checked={isPrivate} onChange={onChangePrivate}/>
    <SaveButton onSave={onSave}/>
  </div>
);

Toolbar.propTypes = {
  onSave: React.PropTypes.func,
  onChangePrivate: React.PropTypes.func,
  isPrivate: React.PropTypes.bool,
};

export default Toolbar;