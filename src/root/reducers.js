import { combineReducers } from 'redux';
import contactManagerReducer from 'features/contactManager/contactManagerSlice';
import editContactReducer from 'features/modalEditContact/modalEditSlice.js';

export default combineReducers({
  contacts: contactManagerReducer,
  editContact: editContactReducer,
});
