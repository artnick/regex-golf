import React from 'react';
import TestList from './TestList';

const Task = ({ matchList, noMatchList }) => (
  <div >
    <TestList title='match' list={matchList}/>
    <TestList title='no match' list={noMatchList}/>
  </div>
);

Task.propTypes = {
  matchList: React.PropTypes.array,
  noMatchList: React.PropTypes.array,
};

export default Task;