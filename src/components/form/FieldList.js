import React from 'react';
import Field from './presentation/Field';

const FieldList = ({ fields, onChange, onBlur, inProgress }) => (
  <>
    {fields.map(field => {
      return (
        <Field
          key={field.name}
          onChange={onChange}
          onBlur={onBlur}
          inProgress={inProgress}
          {...field}
        />
      );
    })}
  </>
);

export default FieldList;
