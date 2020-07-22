import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  selectAddContactAdding,
  selectAddContactDone,
  addContact,
  resetState
} from './addContactSlice';

import Header from 'components/Header';
import Section from 'components/Section';
import Container from 'components/Container';
import Form from 'components/form';

const AddContact = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAdding = useSelector(selectAddContactAdding);
  const isDone = useSelector(selectAddContactDone);

  useEffect(() => {
    if (isDone) {
      dispatch(resetState());
      history.push('/');
    }
  });

  const handleAddContact = formData => {
    dispatch(addContact(formData));
  };

  return (
    <Section>
      <Container>
        <Header>Add a New Contact</Header>
        <Form
          inProgress={isAdding}
          onSubmit={handleAddContact}
        />
      </Container>
    </Section>
  );
};

export default AddContact;
