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
      return !(
        state.contacts.addOrUpdateInProgress ||
        state.contacts.initialLoadComplete
      );
    }
  }
);

export const postContact = createAsyncThunk(
  'contacts/postContact',
  async (data, { dispatch }) => {
    const result = await api.addContact(data);
    if (result) dispatch(addContact(result));
    return result;
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      return !state.contacts.addOrUpdateInProgress;
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

export const putContact = createAsyncThunk(
  'contacts/putContact',
  async (data, { dispatch }) => {
    const result = await api.updateContact(data);
    if (result)
      dispatch(
        updateContact({
          id: result.id,
          changes: result
        })
      );
    return result;
  }
);

// slice

const contactsAdapter = createEntityAdapter({
  selectId: contact => contact.id,
  sortComparer: (a, b) => a.firstName.localeCompare(b.firstName)
});

const contactManagerSlice = createSlice({
  name: 'contacts',
  initialState: contactsAdapter.getInitialState({
    initialLoadComplete: false,
    addOrUpdateInProgress: false,
    fetchInProgress: false,
    currentlyDeletingItems: []
  }),
  reducers: {
    receiveContacts: contactsAdapter.setAll,
    addContact: contactsAdapter.addOne,
    removeContact: contactsAdapter.removeOne,
    updateContact: contactsAdapter.updateOne,
    resetInitialLoadState: state => {
      state.initialLoadComplete = false;
    }
  },
  extraReducers: builder => 
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.fetchInProgress = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.fetchInProgress = false;
        state.initialLoadComplete = true;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        console.log('fetch contacts rejected');
      })
      .addCase(postContact.pending, (state, action) => {
        state.addOrUpdateInProgress = true;
      })
      .addCase(postContact.fulfilled, (state, action) => {
        state.addOrUpdateInProgress = false;
      })
      .addCase(postContact.rejected, (state, action) => {
        console.log('add contact rejected');
      })
      .addCase(deleteContact.pending, (state, action) => {
        state.currentlyDeletingItems.push(action.meta.arg);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const idx = state.currentlyDeletingItems.findIndex(
          i => i === action.meta.arg
        );
        state.currentlyDeletingItems.splice(idx, 1);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        console.log('add contact rejected');
      })
      .addCase(putContact.pending, (state, action) => {
        state.addOrUpdateInProgress = true;
      })
      .addCase(putContact.fulfilled, (state, action) => {
        state.addOrUpdateInProgress = false;
      })
      .addCase(putContact.rejected, (state, action) => {
        console.log('update contact rejected');
      })
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        () => console.log('server rejected request')
      )
});

const {
  receiveContacts,
  addContact,
  removeContact,
  updateContact
} = contactManagerSlice.actions;

export const { resetInitialLoadState } = contactManagerSlice.actions;

export default contactManagerSlice.reducer;

// selectors

export const { selectAll, selectById } = contactsAdapter.getSelectors(
  state => state.contacts
);

export const selectInitialLoadComplete = state =>
  state.contacts.initialLoadComplete;

export const selectAddOrUpdateInProgress = state =>
  state.contacts.addOrUpdateInProgress;

export const selectFetchInProgress = state => state.contacts.fetchInProgress;

const currentlyDeletingSelector = (state, id) => {
  const currentlyDeletingItems = state.contacts.currentlyDeletingItems;
  return currentlyDeletingItems.includes(id);
};

export const makeSelectCurrentlyDeleting = () =>
  createSelector(currentlyDeletingSelector, status => status);
