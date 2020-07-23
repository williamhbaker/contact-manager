import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  deleteContact,
  makeSelectCurrentlyDeleting
} from 'features/contactManager/contactManagerSlice';

import DeleteButton from './DeleteButton';

const DeleteContact = ({ children, contactInfo }) => {
  const dispatch = useDispatch();

  const selectCurrentlyDeleting = useMemo(makeSelectCurrentlyDeleting, []);

  const isDeleting = useSelector(state =>
    selectCurrentlyDeleting(state, contactInfo.id)
  );

  const handleDeleteClick = id => {
    dispatch(deleteContact(id));
  };

  return (
    <DeleteButton
      isDeleting={isDeleting}
      onClick={() => handleDeleteClick(contactInfo.id)}
    >
      {children}
    </DeleteButton>
  );
};

export default DeleteContact;
