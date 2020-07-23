import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchContacts,
  selectAll,
  selectFetchInProgress
} from 'features/contactManager/contactManagerSlice';

import ContactCard from './ContactCard';
import Header from 'components/Header';
import Section from 'components/Section';
import Container from 'components/Container';
import FluidGrid from 'components/FluidGrid';
import InProgress from 'components/InProgress';

function AllContacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAll);
  const isFetching = useSelector(selectFetchInProgress);

  useEffect(() => {
    dispatch(fetchContacts());
  });

  return (
    <Section>
      <Container>
        <Header>All Contacts</Header>
        {isFetching ? (
          <InProgress />
        ) : (
          <FluidGrid>
            {contacts.map(contact => (
              <ContactCard key={contact.id} {...contact} />
            ))}
          </FluidGrid>
        )}
      </Container>
    </Section>
  );
}

export default AllContacts;
