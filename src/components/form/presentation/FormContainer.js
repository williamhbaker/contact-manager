import React from 'react';

const FormContainer = ({
  children,
  onSubmit
}) => (
  <form
    onSubmit={onSubmit}
    noValidate={true}
    style={{
      maxWidth: '30rem',
      margin: '0 auto',
    }}
  >
    {children}
  </form>
);

export default FormContainer