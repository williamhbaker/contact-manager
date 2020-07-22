import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit';

import { receiveContacts } from 'features/contactManager/contactManagerSlice';

import * as api from 'api';

// thunks

export const fetchContacts = createAsyncThunk(
  'showContacts/fetchContacts',
  async (_, { dispatch }) => {
    const result = await api.fetchContacts();
    if (result) dispatch(receiveContacts(result));
    return result;
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      return !(state.showContacts.isFetching || state.showContacts.isCurrent);
    }
  }
);

// slice

const contactsSlice = createSlice({
  name: 'showContacts',
  initialState: {
    isFetching: false,
    isCurrent: false
  },
  reducers: {},
  extraReducers: {
    [fetchContacts.pending]: (state, action) => {
      state.isFetching = true;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.isFetching = false;
      state.isCurrent = true;
    },
    [fetchContacts.rejected]: (state, action) => {
      console.log('fetch contacts rejected');
    }
  }
});

export default contactsSlice.reducer;

// selectors

export const selectContactsIsFetching = state => state.showContacts.isFetching;
