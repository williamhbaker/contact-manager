import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { deleteContact, selectRunningIds } from './deleteContactSlice';

const DeleteContact = ({ children, contactInfo }) => {
  const dispatch = useDispatch();
  const runningIds = useSelector(selectRunningIds);
  const isRunning = runningIds.includes(contactInfo.id);

  const handleDeleteClick = data => {
    dispatch(deleteContact(data));
  };

  return (
    <button
      className={`card-footer-item button is-danger is-light ${isRunning &&
        'is-loading'}`}
      onClick={() => handleDeleteClick(contactInfo.id)}
    >
      {children}
    </button>
  );
};

export default DeleteContact;
