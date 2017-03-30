import React from 'react';

const Test = ({ value, regExp, isMatching }) => {
  let className = '';
  if(regExp) {
    className = (regExp.test(value) == isMatching) ? 'passed' : 'failed';
  }
  return <div className={`test ${className}`}>
    {value}
  </div>;
};

Test.propTypes = {
  value: React.PropTypes.string,
  regExp: React.PropTypes.object,
  isMatching: React.PropTypes.bool,
};

export default Test;