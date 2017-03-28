import React from 'react';
import FieldListContainer from '../containers/FieldListContainer';
import ToolbarContainer from '../containers/ToolbarContainer';

const Editor = () => (
  <div className='editor'>
    <FieldListContainer title={'match'}/>
    <FieldListContainer title={'noMatch'}/>
    <ToolbarContainer/>
  </div>
);

export default Editor;
