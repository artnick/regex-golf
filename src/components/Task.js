import React from 'react';
import TestList from './TestList';

const Task = ({ matchList, noMatchList, regExp, onChange }) => (
  <div >
    <textarea 
      className='regexp'
      value={regExp}
      placeholder='regexp'
      onChange={(event) => onChange(event.target.value)} 
    />
    <TestList title='match' list={matchList} regExp={regExp}/>
    <TestList title='no match' list={noMatchList} regExp={regExp}/>
  </div>
);

Task.propTypes = {
  regExp: React.PropTypes.string,
  matchList: React.PropTypes.array,
  noMatchList: React.PropTypes.array,
  onChange: React.PropTypes.func,
};

export default Task;