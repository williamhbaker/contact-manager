import { combineReducers } from 'redux';
import contactsReducer from 'features/showContacts/contactsSlice';

export default combineReducers({
  contacts: contactsReducer
});
