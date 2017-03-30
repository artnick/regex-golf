import React from 'react';

const TestList = ({ title, list, regExp }) => {
  return <div className='test-list'>
    <h3 className={'field-list__title'}>{title}</h3>
    <ul>{list.map((value, index) => 
      <li 
        className={`test ${value.search(regExp) != -1 ? 'passed' : 'failed'}`} 
        key={index}
      >
        {value}
      </li>
    )}
    </ul>
  </div>;
};

TestList.propTypes = {
  title: React.PropTypes.string,
  list: React.PropTypes.array,
  regExp: React.PropTypes.string,
};

export default TestList;