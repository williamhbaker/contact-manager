import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  postContact,
  selectAddOrUpdateInProgress
} from 'features/contactManager/contactManagerSlice.js';

import Header from 'components/Header';
import Section from 'components/Section';
import Container from 'components/Container';
import Form from 'components/form';

const AddContact = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState(false);

  const isAdding = useSelector(selectAddOrUpdateInProgress);

  useEffect(() => {
    if (submitted && !isAdding) {
      redirectAfterSubmit();
    }
  });

  const handleAddContact = formData => {
    dispatch(postContact(formData));
    setSubmitted(true);
  };

  const redirectAfterSubmit = () => history.push('/');

  return (
    <Section>
      <Container>
        <Header>Add a New Contact</Header>
        <Form
          inProgress={isAdding}
          onSubmit={handleAddContact}
          onCancel={redirectAfterSubmit}
        />
      </Container>
    </Section>
  );
};

export default AddContact;
