import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { modifyContact } from 'features/contacts/contactsSlice';

import ModalWrapper from 'components/ModalWrapper';
import Form from 'components/form';

const ModalEdit = ({ children, contactInfo }) => {
  const dispatch = useDispatch();
  const handleEditSubmit = data =>
    dispatch(
      modifyContact({
        id: contactInfo.id,
        ...data
      })
    );

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);

  return (
    <>
      {open && (
        <ModalWrapper
          title={`Editing ${contactInfo.firstName} ${contactInfo.lastName}`}
          onCancelClick={closeModal}
        >
          <Form
            data={contactInfo}
            onCancel={closeModal}
            onSubmit={handleEditSubmit}
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
