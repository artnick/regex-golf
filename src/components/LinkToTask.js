import React from 'react';

const LinkToTask = ({ value }) => (
  <div className='linkToTask'>
    <input 
      id='linkField'
      type='text'
      readOnly='true'
      value={value}
      onFocus={(event) => {
        event.target.select();
        document.execCommand('copy');
      }}
    />
    <label htmlFor='linkField' className='copy-btn'>copy</label>
  </div>
);

LinkToTask.propTypes = {
  value: React.PropTypes.string,
};

export default LinkToTask;