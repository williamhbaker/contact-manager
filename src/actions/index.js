import { v4 as uuidv4 } from 'uuid';

export const addContact = (newContactData) => ({
  type: 'ADD_CONTACT',
  data: { id: uuidv4(), ...newContactData, },
});

export const modifyContact = (modifiedContactData) => ({
  type: 'MODIFY_CONTACT',
  data: { ...modifiedContactData, },
});

export const deleteContact = (id) => ({
  type: 'DELETE_CONTACT',
  id,
});
