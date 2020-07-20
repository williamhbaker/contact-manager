import React from 'react';

import FluidGrid from './presentation/FluidGrid';
import ContactCard from './presentation/ContactCard';

const ContactList = () => {
  return (
    <FluidGrid>
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
    </FluidGrid>
  );
}

export default ContactList;