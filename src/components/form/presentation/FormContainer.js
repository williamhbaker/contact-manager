import React from 'react';

const FormContainer = ({
  children,
  onSubmit
}) => (
  <form
    onSubmit={onSubmit}
    noValidate={true}
  >
    {children}
  </form>
);

export default FormContainer