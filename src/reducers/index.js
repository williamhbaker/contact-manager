import { combineReducers } from 'redux';

const contact = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        id: action.id,
        firstName: action.firstName,
        lastName: action.lastName,
        phone: action.phone,
      };
    default:
      return state;
  }
};

const contacts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return [...state, contact(undefined, action)];
    default:
      return state;
  }
};

const contactsApp = combineReducers({
  contacts,
});

export default contactsApp;
