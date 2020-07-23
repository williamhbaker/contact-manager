import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  deleteContact,
  makeSelectCurrentlyDeleting
} from 'features/contactManager/contactManagerSlice';

const DeleteContact = ({ children, contactInfo }) => {
  const dispatch = useDispatch();

  const selectCurrentlyDeleting = useMemo(
    makeSelectCurrentlyDeleting,
    []
  );

  const isDeleting = useSelector(state => selectCurrentlyDeleting(state, contactInfo.id));

  const handleDeleteClick = id => {
    dispatch(deleteContact(id));
  };

  return (
    <button
      className={`card-footer-item button is-danger is-light ${isDeleting &&
        'is-loading'}`}
      onClick={() => handleDeleteClick(contactInfo.id)}
    >
      {children}
    </button>
  );
};

export default DeleteContact;
