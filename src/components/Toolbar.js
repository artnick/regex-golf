import React from 'react';
import SaveButton from './SaveButton';
import CheckBox from './CheckBox';
import LinkToTask from './LinkToTask';

const Toolbar = ({ link, onSave, isPrivate, onChangePrivate }) => (
  <div className='toolbar'>
    <LinkToTask value={link}/>
    <CheckBox title='Private' checked={isPrivate} onChange={onChangePrivate}/>
    <SaveButton onSave={onSave}/>
  </div>
);

Toolbar.propTypes = {
  link: React.PropTypes.string,
  onSave: React.PropTypes.func,
  onChangePrivate: React.PropTypes.func,
  isPrivate: React.PropTypes.bool,
};

export default Toolbar;