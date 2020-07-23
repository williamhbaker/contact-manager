import React from 'react';

const DeleteButton = ({ onClick, children }) => (
  <button
    className="card-footer-item button is-info is-light"
    onClick={onClick}
  >
    {children}
  </button>
);

export default DeleteButton;
