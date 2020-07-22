import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit'

import FluidGrid from 'components/FluidGrid';
import ContactCard from './ContactCard';

const ContactList = ({
  contacts
}) => {
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

const getContacts = (contacts) => contacts;

const selectContacts = createSelector(
  [ getContacts ],
  (contacts) => {
    return contacts;
  }
);

const mapStateToProps = (state) => ({
  contacts: selectContacts(state.contacts),
});

export default connect(
  mapStateToProps
)(ContactList);
