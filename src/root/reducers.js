import { combineReducers } from 'redux';
import addContactsReducer from 'features/addContact/addContactSlice';
import contactManagerReducer from 'features/contactManager/contactManagerSlice';
import editContactReducer from 'features/modalEditContact/modalEditSlice.js';
import deleteContactReducer from 'features/deleteContact/deleteContactSlice.js';

export default combineReducers({
  contacts: contactManagerReducer,
  addContact: addContactsReducer,
  editContact: editContactReducer,
  deleteContact: deleteContactReducer
});
