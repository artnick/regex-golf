import React from 'react';
import FieldListContainer from '../containers/FieldListContainer';

const Editor = () => (
  <div className='editor'>
    <FieldListContainer title={'match'}/>
    <FieldListContainer title={'noMatch'}/>
  </div>
);

export default Editor;
