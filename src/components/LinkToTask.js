import React from 'react';
import { Link } from 'react-router-dom';

const LinkToTask = ({ value }) => {
  if(value)
    return <div className='linkToTask'>
      Permalink:
      <input 
        id='linkField'
        className='linkToTask__input'
        type='text'
        readOnly='true'
        value={window.location.href+value}
        onFocus={(event) => {
          event.target.select();
          document.execCommand('copy');
        }}
      />
      <label htmlFor='linkField' className='copy-btn'>copy</label>
      <Link className='goto-btn' to={value}>go to</Link>
    </div>;
  else
    return null;
};

LinkToTask.propTypes = {
  value: React.PropTypes.string,
};

export default LinkToTask;