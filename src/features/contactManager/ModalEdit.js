import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { putContact, selectAddOrUpdateInProgress } from './contactManagerSlice';

import ModalWrapper from 'components/ModalWrapper';
import EditButton from './EditButton';
import Form from 'components/form';
import contactDefinition from './contactDefinition';

const ModalEdit = ({ children, contactInfo }) => {
  const dispatch = useDispatch();
  const isUpdating = useSelector(selectAddOrUpdateInProgress);

  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);

  useEffect(() => {
    if (submitted && !isUpdating) {
      closeModal();
      setSubmitted(false);
    }
  }, [submitted, isUpdating]);

  const handleEditSubmit = data => {
    const newData = { id: contactInfo.id, ...data };
    dispatch(putContact(newData));
    setSubmitted(true);
  };

  return (
    <>
      {open && (
        <ModalWrapper
          title={`Editing ${contactInfo.firstName} ${contactInfo.lastName}`}
          onCancelClick={closeModal}
        >
          <Form
            data={contactInfo}
            fieldList={contactDefinition}
            inProgress={isUpdating}
            onSubmit={handleEditSubmit}
            onCancel={closeModal}
          />
        </ModalWrapper>
      )}

      <EditButton onClick={openModal}>{children}</EditButton>
    </>
  );
};

export default ModalEdit;
