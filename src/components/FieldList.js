import React from 'react';
import Field from './Field';

const FieldList = ({ title, fields=[], onChange, onAddField }) => (
  <div className='field-list'>
    <h3 className={'field-list__title'}>{title == 'match' ? 'Match' : 'No match'}</h3>
    <ul>{fields.map((field, index, arr) => 
      <li key={index} >
        <Field 
          value={field} 
          onChange={(value) => onChange(value, index, title)}
          onFocus={index == arr.length - 1 ? () => onAddField(title) : ()=>(null)}
        />
      </li>
    )}
    </ul>
  </div>
);

FieldList.propTypes = {
  title: React.PropTypes.string,
  fields: React.PropTypes.array,
  onChange: React.PropTypes.func,
  onAddField: React.PropTypes.func,
};

export default FieldList;