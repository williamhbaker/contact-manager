import React from 'react';
import { connect } from 'react-redux';

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
}

const mapStateToProps = (state) => {
  return { contacts: state.contacts }
}

export default connect(
  mapStateToProps
)(ContactList);
