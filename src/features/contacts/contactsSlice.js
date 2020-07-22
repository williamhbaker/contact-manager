import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import * as api from 'api';

// thunks

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const result = await api.fetchContacts();
    return result;
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      return !(state.contacts.isFetching || state.contacts.hasFetched);
    }
  }
);

// slice

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    all: [],
    isFetching: false,
    hasFetched: false,
  },
  reducers: {
    testThing(state, action) {
      console.log(action.payload);
    },
    addContact: {
      reducer(state, action) {
        state.all.push(action.payload);
      },
      prepare(data) {
        return { payload: { id: uuidv4(), ...data } };
      },
    },
    deleteContact(state, action) {
      const idx = state.all.findIndex(contact => contact.id === action.payload.id);
      state.all.splice(idx, 1);
    },
    modifyContact(state, action) {
      const thisContact = state.all.find(contact => contact.id === action.payload.id);
      Object.assign(thisContact, action.payload);
    },
  },
  extraReducers: {
    [fetchContacts.pending]: (state, action) => {
      state.isFetching = true;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.all = action.payload;
      state.isFetching = false;
      state.hasFetched = true;
    },
    [fetchContacts.rejected]: (state, action) => {
      console.log('fetch rejected');
    },
  },
});

export const {
  addContact,
  deleteContact,
  modifyContact,
} = contactsSlice.actions;

export default contactsSlice.reducer;

// selectors

export const makeSelectContacts = () => {
  const getContacts = (state) => state.contacts.all;

  return createSelector(
    [ getContacts ],
    (contacts) => contacts,
  );
};

export const selectContactsIsFetching = (state) => state.contacts.isFetching;