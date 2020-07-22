import React, { useState } from 'react';
import { connect } from 'react-redux';

import { modifyContact } from './contactsSlice';

import ModalWrapper from 'components/ModalWrapper';
import Form from 'components/form';

const ModalEdit = ({
  children,
  contactInfo,
  modifyContact,
}) => {
  const [open, setOpen] = useState(false);

  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);
  const handleEditSubmit = (data) => modifyContact({ id: contactInfo.id, ...data });

  return (
    <>
      {open &&
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
      }

      {React.Children.map(children, (child) => {
        return React.cloneElement(
          child,
          { onClick: openModal }
        );
      })}
    </>
  );
};

const mapDispatch = { modifyContact };

export default connect(
  null,
  mapDispatch
)(ModalEdit);