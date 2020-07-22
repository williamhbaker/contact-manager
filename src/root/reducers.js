import { combineReducers } from 'redux'
import contactsReducer from 'features/contacts/contactsSlice'

export default combineReducers({
  contacts: contactsReducer,
});