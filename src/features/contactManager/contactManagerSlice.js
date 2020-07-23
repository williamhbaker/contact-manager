import {
  createSlice,
  createSelector,
  createEntityAdapter,
  createAsyncThunk
} from '@reduxjs/toolkit'; 

import * as api from 'api';

// thunks

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { dispatch }) => {
    const result = await api.fetchContacts();
    if (result) dispatch(contactsReceived(result));
    return result;
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      return !(state.contacts.addOrUpdateInProgress || state.contacts.initialLoadComplete);
    }
  }
);

// slice

const contactsAdapter = createEntityAdapter({
  selectId: contact => contact.id,
  sortComparer: (a, b) => a.firstName.localeCompare(b.firstName),
});

const initialState = contactsAdapter.getInitialState({
  initialLoadComplete: false,
  addOrUpdateInProgress: false,
  currentlyDeletingItems: [],
  all: [],
  isCurrent: false,
});

const contactManagerSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
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
    },
    contactsReceived: contactsAdapter.setAll,
  },
  extraReducers: {
    [fetchContacts.pending]: (state, action) => {
      state.addOrUpdateInProgress = true;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.addOrUpdateInProgress = false;
      state.initialLoadComplete = true;
    },
    [fetchContacts.rejected]: (state, action) => {
      console.log('fetch contacts rejected');
    }
  }
});

export const {
  addContact,
  deleteContact,
  updateContact,
  receiveContacts,
  contactsReceived
} = contactManagerSlice.actions;

export default contactManagerSlice.reducer;

// selectors

export const {
  selectAll,
  selectById
} = contactsAdapter.getSelectors(state => state.contacts);


const loadSelector = state => state.contacts.initialLoadComplete;
const inProgressSelector = state => state.contacts.addOrUpdateInProgress;

export const selectInitialLoadComplete = createSelector(
  loadSelector,
  status => status
);

export const selectAddOrUpdateInProgress = createSelector(
  inProgressSelector,
  status => status
);