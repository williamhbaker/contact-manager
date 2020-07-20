import React from 'react';
import Form from './form';
import Header from './wrappers/Header';
import Section from'./wrappers/Section';
import Container from'./wrappers/Container';

function AddContact() {
  return (
    <Section>
      <Container>
        <Header>
          Add a New Contact
        </Header>
        <Form />
      </Container>
    </Section>
  );
}

export default AddContact;
