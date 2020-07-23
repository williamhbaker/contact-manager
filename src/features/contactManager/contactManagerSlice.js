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
    if (result) dispatch(receiveContacts(result));
    return result;
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      return !(state.contacts.addOrUpdateInProgress || state.contacts.initialLoadComplete);
    }
  }
);

export const putContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { dispatch }) => {
    const result = await api.addContact(data);
    if (result) dispatch(addContact(result));
    return result;
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      return !(state.contacts.addOrUpdateInProgress);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { dispatch }) => {
    const result = await api.deleteContact(id);
    if (result) dispatch(removeContact(result));
    return result;
  }
);

// slice

const contactsAdapter = createEntityAdapter({
  selectId: contact => contact.id,
  sortComparer: (a, b) => a.firstName.localeCompare(b.firstName),
});

const contactManagerSlice = createSlice({
  name: 'contacts',
  initialState: contactsAdapter.getInitialState({
    initialLoadComplete: false,
    addOrUpdateInProgress: false,
    currentlyDeletingItems: [],
  }),
  reducers: {
    receiveContacts: contactsAdapter.setAll,
    addContact: contactsAdapter.addOne,
    removeContact: contactsAdapter.removeOne,
    updateContact(state, action) {
      const thisContact = state.all.find(
        contact => contact.id === action.payload.id
      );
      Object.assign(thisContact, action.payload);
    },
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
    },
    [putContact.pending]: (state, action) => {
      state.addOrUpdateInProgress = true;
    },
    [putContact.fulfilled]: (state, action) => {
      state.addOrUpdateInProgress = false;
    },
    [putContact.rejected]: (state, action) => {
      console.log('add contact rejected');
    },
    [deleteContact.pending]: (state, action) => {
      state.currentlyDeletingItems.push(action.meta.arg);
    },
    [deleteContact.fulfilled]: (state, action) => {
      const idx = state.currentlyDeletingItems.findIndex(i => i === action.meta.arg);
      state.currentlyDeletingItems.splice(idx, 1);
    },
    [deleteContact.rejected]: (state, action) => {
      console.log('add contact rejected');
    }
  }
});

export const {
  receiveContacts,
  addContact,
  removeContact,
  updateContact,
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

const currentlyDeletingSelector = (state, id) => {
  const currentlyDeletingItems = state.contacts.currentlyDeletingItems;
  return currentlyDeletingItems.includes(id);
};

export const makeSelectCurrentlyDeleting = () => createSelector(
  currentlyDeletingSelector,
  status => status
);