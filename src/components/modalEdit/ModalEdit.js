import React, { useState } from 'react';
import { connect } from 'react-redux';

import { modifyContact } from '../../actions';

import ModalWrapper from './presentation/ModalWrapper';
import Form from '../form';

const ModalEdit = ({
  children,
  contactInfo,
  modifyContact,
}) => {
  const [open, setOpen] = useState(false);

  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);
  const handleEditSubmit = (data) => modifyContact(contactInfo.id, { ...data });

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

const mapDispatchToProps = { modifyContact };

export default connect(
  null,
  mapDispatchToProps
)(ModalEdit);