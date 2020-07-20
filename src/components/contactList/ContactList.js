import React from 'react';

import FluidGrid from './presentation/FluidGrid';
import ContactCard from './presentation/ContactCard';

import { v4 as uuidv4 } from 'uuid';

const dummyData = [
  {
    id: uuidv4(),
    firstName: 'asdf',
    lastName: 'zxcv',
    email: 'zxcv@qwer.com',
    phone: '123412341234',
  },
  {
    id: uuidv4(),
    firstName: 'asdf',
    lastName: 'zxcv',
    email: 'zxcv@qwer.com',
    phone: '123412341234',
  },
  {
    id: uuidv4(),
    firstName: 'asdf',
    lastName: 'zxcv',
    email: 'zxcv@qwer.com',
    phone: '123412341234',
  },
  {
    id: uuidv4(),
    firstName: 'asdf',
    lastName: 'zxcv',
    email: 'zxcv@qwer.com',
    phone: '123412341234',
  },
  {
    id: uuidv4(),
    firstName: 'asdf',
    lastName: 'zxcv',
    email: 'zxcv@qwer.com',
    phone: '123412341234',
  },
];

const ContactList = () => {
  return (
    <FluidGrid>
      {dummyData.map(c => <ContactCard
        key={c.id}
        { ...c }
      />)}
    </FluidGrid>
  );
}

export default ContactList;