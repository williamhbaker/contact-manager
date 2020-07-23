import React from 'react';

const DeleteButton = ({ isDeleting, onClick, children }) => (
  <button
    className={`card-footer-item button is-danger is-light ${isDeleting &&
      'is-loading'}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default DeleteButton;
