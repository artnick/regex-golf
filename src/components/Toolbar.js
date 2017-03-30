import React from 'react';
import SaveButton from './SaveButton';
import CheckBox from './CheckBox';
import LinkToTask from './LinkToTask';
import Spinner from './Spinner';

const Toolbar = ({ link, onSave, isPrivate, isSaving, onChangePrivate }) => (
  <div className='toolbar'>
    <CheckBox title='Private' checked={isPrivate} onChange={onChangePrivate}/>
    <SaveButton onSave={onSave}/>
    {isSaving ? <Spinner/> : <LinkToTask value={link}/>}
  </div>
);

Toolbar.propTypes = {
  link: React.PropTypes.string,
  onSave: React.PropTypes.func,
  onChangePrivate: React.PropTypes.func,
  isPrivate: React.PropTypes.bool,
  isSaving: React.PropTypes.bool,
};

export default Toolbar;