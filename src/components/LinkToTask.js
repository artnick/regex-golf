import React from 'react';

const LinkToTask = ({ value }) => (
  <div className='linkToTask'>
    Permalink:
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
    <a className='goto-btn' href={value}>go to</a>
  </div>
);

LinkToTask.propTypes = {
  value: React.PropTypes.string,
};

export default LinkToTask;