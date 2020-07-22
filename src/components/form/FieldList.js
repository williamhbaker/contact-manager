import React from 'react';
import Field from './presentation/Field';

const FieldList = ({ fields, onChange, onBlur }) => (
  <>
    {fields.map(field => {
      return (
        <Field
          key={field.name}
          onChange={onChange}
          onBlur={onBlur}
          {...field}
        />
      );
    })}
  </>
);

export default FieldList;
