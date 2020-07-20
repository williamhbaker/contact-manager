import React from 'react';

const FormContainer = ({
  children,
  onSubmit
}) => (
  <form
    onSubmit={onSubmit}
    noValidate={true}
    className='container'
  >
    {children}
  </form>
);

export default FormContainer