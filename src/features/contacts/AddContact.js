import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addContact } from 'features/contacts/contactsSlice';

import Header from 'components/Header';
import Section from'components/Section';
import Container from'components/Container';
import Form from 'components/form';

const AddContact = ({
  handleAddContact,
  history
}) => (
  <Section>
    <Container>
      <Header>
        Add a New Contact
      </Header>
      <Form
        onCancel={() => history.push('/')}
        onSubmit={handleAddContact}
      />
    </Container>
  </Section>
);

const mapDispatch = {
  handleAddContact: addContact,
};

export default withRouter(connect(
  null,
  mapDispatch
)(AddContact));

