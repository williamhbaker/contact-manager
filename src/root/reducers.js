import { combineReducers } from 'redux';
import contactsReducer from 'features/showContacts/contactsSlice';
import addContactsReducer from 'features/addContact/addContactSlice';

export default combineReducers({
  contacts: contactsReducer,
  addContact: addContactsReducer,
});
