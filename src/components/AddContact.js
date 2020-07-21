import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addContact } from 'features/contacts/contactsSlice';

import Header from './wrappers/Header';
import Section from'./wrappers/Section';
import Container from'./wrappers/Container';
import Form from './form';

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

