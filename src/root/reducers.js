import { combineReducers } from 'redux';
import contactManagerReducer from 'features/contactManager/contactManagerSlice';
import editContactReducer from 'features/modalEditContact/modalEditSlice.js';
import deleteContactReducer from 'features/deleteContact/deleteContactSlice.js';

export default combineReducers({
  contacts: contactManagerReducer,
  editContact: editContactReducer,
  deleteContact: deleteContactReducer
});
