import React from 'react';
import SaveButton from './SaveButton';
import LinkToTask from './LinkToTask';
import Spinner from './Spinner';

const Toolbar = ({ link, onSave, isSaving }) => (
  <div className='toolbar'>
    <SaveButton onSave={onSave}/>
    {isSaving ? <Spinner/> : <LinkToTask value={link}/>}
  </div>
);

Toolbar.propTypes = {
  link: React.PropTypes.string,
  onSave: React.PropTypes.func,
  isSaving: React.PropTypes.bool,
};

export default Toolbar;