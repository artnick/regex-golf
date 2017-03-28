import React from 'react';
import Field from './Field';

const FieldList = ({ title, fields=[], onChange, onAddField, onDeleteField }) => (
  <div className='field-list'>
    <h3 className={'field-list__title'}>{title == 'match' ? 'match' : 'no match'}</h3>
    {fields.map((field, index, arr) => 
      <Field 
        key={index}
        value={field} 
        onChange={(value) => onChange(value, index, title)}
        onFocus={ () => onAddField(title) }
        onDelete={() => onDeleteField(index, title)}
        isLast={index == arr.length - 1}
      />
    )}
  </div>
);

FieldList.propTypes = {
  title: React.PropTypes.string,
  fields: React.PropTypes.array,
  onChange: React.PropTypes.func,
  onAddField: React.PropTypes.func,
  onDeleteField: React.PropTypes.func,
};

export default FieldList;