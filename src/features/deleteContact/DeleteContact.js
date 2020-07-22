import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  deleteContact,
  selectDeleteContactRunning
} from './deleteContactSlice';

const DeleteContact = ({
  children,
  contactInfo
}) => {
  const dispatch = useDispatch();
  const isRunning = useSelector(selectDeleteContactRunning);

  const handleDeleteClick = data => {
    dispatch(deleteContact(data));
  };

  return (
    <button
      className={`card-footer-item button is-danger is-light ${isRunning && 'is-loading'}`}
      onClick={() => handleDeleteClick(contactInfo)}
    >
      {children}
    </button>
  );
};

export default DeleteContact;
