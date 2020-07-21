import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit'

import FluidGrid from './presentation/FluidGrid';
import ContactCard from './presentation/ContactCard';

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

const getContacts = (state) => state;

const selectContacts = createSelector(
  [ getContacts ],
  (contacts) => {
    return contacts;
  }
);

const mapStateToProps = (state) => ({
  contacts: selectContacts(state),
});

export default connect(
  mapStateToProps
)(ContactList);
