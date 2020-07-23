import { v4 as uuidv4 } from 'uuid';

// This is a mock in-memory implementation of something that would be implemented by calling a REST server.

const delayTime = 1000;

const db = {
  contacts: [
    {
      id: uuidv4(),
      firstName: 'Bob',
      lastName: 'Smith',
      email: 'Bob@smith.net',
      phone: '(555) 123-1234'
    },
    {
      id: uuidv4(),
      firstName: 'Jim',
      lastName: 'Jones',
      email: 'JimJones@gmail.com',
      phone: '(333) 111-2222'
    },
    {
      id: uuidv4(),
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'janedoe@yahoo.com',
      phone: '(987) 654-3210'
    }
  ]
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const fetchContacts = () => {
  console.log('server is fetching contacts');
  return delay(delayTime).then(() => {
    return db.contacts;
  });
};

export const addContact = contactData => {
  console.log('server is adding contact');
  const data = { id: uuidv4(), ...contactData };
  return delay(delayTime).then(() => {
    db.contacts = [...db.contacts, data];
    return data;
  });
};

export const updateContact = contactData => {
  console.log('server is updating contact');
  const idx = db.contacts.findIndex(c => c.id === contactData.id);
  const data = Object.assign({}, db.contacts[idx], contactData);
  return delay(delayTime).then(() => {
    db.contacts = [
      ...db.contacts.slice(0, idx),
      data,
      ...db.contacts.slice(idx + 1)
    ];
    return data;
  });
};

export const deleteContact = id => {
  console.log('server is deleting contact');
  const idx = db.contacts.findIndex(c => c.id === id);
  return delay(delayTime).then(() => {
    db.contacts = [...db.contacts.slice(0, idx), ...db.contacts.slice(idx + 1)];
    return id;
  });
};
