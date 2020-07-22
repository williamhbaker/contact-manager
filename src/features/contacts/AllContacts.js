import React from 'react';
import ContactList from './ContactList';
import Header from 'components/Header';
import Section from'components/Section';
import Container from'components/Container';

function AllContacts() {
  return (
    <Section>
      <Container>
        <Header>
          All Contacts
        </Header>
        <ContactList />
      </Container>
    </Section>
  );
}

export default AllContacts;
