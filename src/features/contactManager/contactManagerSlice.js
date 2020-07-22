import { createSlice, createSelector } from '@reduxjs/toolkit';

// slice

const contactManagerSlice = createSlice({
  name: 'contacts',
  initialState: {
    all: [],
    isCurrent: false
  },
  reducers: {
    receiveContacts(state, action) {
      state.all = action.payload;
      state.isCurrent = true;
    },
    addContact(state, action) {
      if (state.isCurrent) {
        state.all.push(action.payload);
      }
    },
    deleteContact(state, action) {
      const idx = state.all.findIndex(
        contact => contact.id === action.payload.id
      );
      state.all.splice(idx, 1);
    },
    updateContact(state, action) {
      const thisContact = state.all.find(
        contact => contact.id === action.payload.id
      );
      Object.assign(thisContact, action.payload);
    }
  }
});

export const {
  addContact,
  deleteContact,
  updateContact,
  receiveContacts
} = contactManagerSlice.actions;

export default contactManagerSlice.reducer;

// selectors

export const makeSelectContacts = () => {
  const getContacts = state => state.contacts.all;

  return createSelector([getContacts], contacts => contacts);
};
