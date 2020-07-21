import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push({ ...action.payload });
      },
      prepare(data) {
        return { payload: { id: uuidv4(), ...data } };
      },
    },
    deleteContact(state, action) {
      const idx = state.findIndex(contact => contact.id === action.payload.id);
      state.splice(idx, 1);
    },
    modifyContact(state, action) {
      const thisContact = state.find(contact => contact.id === action.payload.id);
      Object.assign(thisContact, action.payload);
    },
  },
});

export const { addContact, deleteContact, modifyContact } = contactsSlice.actions;

export default contactsSlice.reducer;