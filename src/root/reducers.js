import { combineReducers } from 'redux';
import contactManagerReducer from 'features/contactManager/contactManagerSlice';

export default combineReducers({
  contacts: contactManagerReducer,
});
