import React from 'react';

const TestList = ({ title, list }) => (
  <div className='test-list'>
    <h3 className={'field-list__title'}>{title}</h3>
    <ul>{list.map((value, index) => 
      <li className='test' key={index}>{value}</li>
    )}
    </ul>
  </div>
);

TestList.propTypes = {
  title: React.PropTypes.string,
  list: React.PropTypes.array,
};

export default TestList;