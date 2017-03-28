import React from 'react';
import FieldListContainer from '../containers/FieldListContainer';
import ToolbarContainer from '../containers/ToolbarContainer';

const Editor = () => (
  <div className='editor'>
    <ToolbarContainer/>
    <FieldListContainer title={'match'}/>
    <FieldListContainer title={'noMatch'}/>
  </div>
);

export default Editor;
