import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit'

import FluidGrid from 'components/FluidGrid';
import ContactCard from './ContactCard';

const getContacts = (state) => state.contacts;

const selectContacts = createSelector(
  [ getContacts ],
  (contacts) => contacts,
);

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  return (
    <FluidGrid>
      {contacts.map(contact => (
        <ContactCard
          key={contact.id}
          { ...contact }
        />
      ))}
    </FluidGrid>
  );
};

export default ContactList;
