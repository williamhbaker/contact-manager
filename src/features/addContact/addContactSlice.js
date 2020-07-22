import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'api';

import { addContact as addToState } from 'features/contactManager/contactManagerSlice';

// thunks

export const addContact = createAsyncThunk(
  'addContacts/addContact',
  async (data, { dispatch }) => {
    const result = await api.addContact(data);
    if (result) dispatch(addToState(result));
    return result;
  }
);

// slice

const addContactSlice = createSlice({
  name: 'addContact',
  initialState: {
    isAdding: false,
    isDone: false
  },
  reducers: {
    resetState(state, action) {
      state.isAdding = false;
      state.isDone = false;
    }
  },
  extraReducers: {
    [addContact.pending]: (state, action) => {
      state.isDone = false;
      state.isAdding = true;
    },
    [addContact.fulfilled]: (state, action) => {
      state.isDone = true;
      state.isAdding = false;
    },
    [addContact.rejected]: (state, action) => {
      console.log('add contact rejected');
    }
  }
});

export default addContactSlice.reducer;

export const { resetState } = addContactSlice.actions;

// selectors

export const selectAddContactAdding = state => state.addContact.isAdding;
export const selectAddContactDone = state => state.addContact.isDone;
