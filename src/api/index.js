import { v4 as uuidv4 } from 'uuid';

// This is a mock in-memory implementation of something that would be implemented by calling a REST server.

const fakeDatabase = {
  contacts: [{
    id: uuidv4(),
    firstName: 'Bob',
    lastName: 'Smith',
    email: 'Bob@smith.net',
    phone: '(555) 123-1234',
  }, {
    id: uuidv4(),
    firstName: 'Jim',
    lastName: 'Jones',
    email: 'JimJones@gmail.com',
    phone: '(333) 111-2222',
  },{
    id: uuidv4(),
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'janedoe@yahoo.com',
    phone: '(987) 654-3210',
  },]
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchContacts = () => {
  return delay(2000).then(() => {
    return fakeDatabase.contacts;
  });
}