import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchContacts,
  makeSelectContacts,
  selectContactsIsFetching
} from './contactsSlice';

import ContactCard from './ContactCard';
import Header from 'components/Header';
import Section from 'components/Section';
import Container from 'components/Container';
import FluidGrid from 'components/FluidGrid';
import InProgress from 'components/InProgress';

const selectContacts = makeSelectContacts();

function AllContacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isFetching = useSelector(selectContactsIsFetching);

  useEffect(() => {
    dispatch(fetchContacts());
  });

  return (
    <Section>
      <Container>
        <Header>All Contacts</Header>
        {isFetching ?
          <InProgress /> :
          <FluidGrid>
            {contacts.map(contact => (
              <ContactCard key={contact.id} {...contact} />
            ))}
          </FluidGrid>
        }
      </Container>
    </Section>
  );
}

export default AllContacts;
