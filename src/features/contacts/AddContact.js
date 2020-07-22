import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { addContact } from 'features/contacts/contactsSlice';

import Header from 'components/Header';
import Section from'components/Section';
import Container from'components/Container';
import Form from 'components/form';

const AddContact = () => { 
  const dispatch = useDispatch();
  const handleAddContact = (formData) => dispatch(addContact(formData));

  const history = useHistory();

  return (
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
};

export default AddContact;
