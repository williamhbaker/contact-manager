import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  updateContact,
  selectEditContactUpdating,
  selectEditContactDone,
  resetState
} from './modalEditSlice';

import ModalWrapper from 'components/ModalWrapper';
import Form from 'components/form';

const ModalEdit = ({ children, contactInfo }) => {
  const dispatch = useDispatch();
  const isUpdating = useSelector(selectEditContactUpdating);
  const isDone = useSelector(selectEditContactDone);

  const handleEditSubmit = data => {
    const newData = { id: contactInfo.id, ...data };
    dispatch(updateContact(newData));
  };

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);

  useEffect(() => {
    if (isDone && open) {
      closeModal();
      dispatch(resetState());
    }
  });

  return (
    <>
      {open && (
        <ModalWrapper
          title={`Editing ${contactInfo.firstName} ${contactInfo.lastName}`}
          onCancelClick={closeModal}
        >
          <Form
            data={contactInfo}
            inProgress={isUpdating}
            onSubmit={handleEditSubmit}
            onCancel={closeModal}
          />
        </ModalWrapper>
      )}

      {React.Children.map(children, child => {
        return React.cloneElement(child, { onClick: openModal });
      })}
    </>
  );
};

export default ModalEdit;
