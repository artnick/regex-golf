import React from 'react';
import FieldListContainer from '../containers/FieldListContainer';
import Toolbar from '../containers/Toolbar';

const Editor = () => (
  <div className='editor'>
    <FieldListContainer title={'match'}/>
    <FieldListContainer title={'noMatch'}/>
    <Toolbar/>
  </div>
);

export default Editor;
