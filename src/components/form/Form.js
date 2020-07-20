import React from 'react';
import { useState } from 'react';

import FieldList from './FieldList';
import FormButtons from './presentation/FormButtons';
import FormContainer from './presentation/FormContainer';

import contactDefinition from  './contactDefinition';

const getFieldByName = (fields, name) => {
  const thisField = fields.find(f => f.name === name);
  return { ...thisField };
};

const blankFormState = () => {
  return contactDefinition.map(field => {
    return {
      ...field,
      value: '',
      validity: {},
      needsValidated: false,
    }
  });
};

const populatedFormState = (data) => {
  return blankFormState().map(field => {
    return {
      ...field,
      value: data[field.name],
    };
  })
};

const Form = ({ 
  data,
  onCancel,
  onSubmit,
}) => {
  const initialState = data ? populatedFormState(data) : blankFormState();

  const [fields, setFields] = useState(initialState);

  const reset = () => {
    setFields(initialState);
  };

  const updateFieldState = (name, newData) => {
    setFields(fields.map(f => f.name === name ? { ...f, ...newData } : f));
  };

  const handleInputChange = (event) => {
    const thisName = event.target.dataset.name
    const thisField = getFieldByName(fields, thisName);

    let newVal = event.target.value;
    if (thisField.formatter && newVal.length > thisField.value.length) {
      newVal = thisField.formatter(event.target.value)
    }

    const validity = thisField.validity.error ? thisField.validator(newVal) : thisField.validity;

    updateFieldState(thisName, { value: newVal, validity });
  };

  const handleBlur = (event) => {
    const thisName = event.target.dataset.name
    const thisField = getFieldByName(fields, thisName);

    updateFieldState(thisName, { validity: thisField.validator(thisField.value) });
  };

  const validateAllFields = () => {
    const newFields = fields.map(field => ({
      ...field,
      validity: field.validator(field.value),
    }));

    setFields(newFields);
    return newFields.some(field => field.validity.error);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (validateAllFields()) return;

    const fieldData = fields.reduce((newData, nextField) => {
      return { ...newData, [nextField.name]: nextField.value };
    }, {});

    onSubmit(fieldData);
    handleFormCancel();
  };

  const handleFormCancel = () => {
    onCancel();
    reset();
  };

  return (
    <FormContainer
      onSubmit={handleFormSubmit}
    >
      <FieldList
        fields={fields}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
      <FormButtons
        onCancel={handleFormCancel}
      />
    </FormContainer>
  );
};

export default Form;