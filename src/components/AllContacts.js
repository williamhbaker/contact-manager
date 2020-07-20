import React from 'react';
import ContactList from './contactList';
import Header from './wrappers/Header';
import Section from'./wrappers/Section';
import Container from'./wrappers/Container';

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
