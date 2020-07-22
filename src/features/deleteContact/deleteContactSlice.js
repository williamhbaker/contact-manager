import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'api';

import { deleteContact as deleteContactState } from 'features/contactManager/contactManagerSlice';

// thunks

export const deleteContact = createAsyncThunk(
  'deleteContact/deleteContact',
  async (data, { dispatch }) => {
    const result = await api.deleteContact(data);
    if (result) dispatch(deleteContactState(result));
    return result;
  }
);

// slice

const deleteContactSlice = createSlice({
  name: 'deleteContact',
  initialState: {
    isRunning: false,
  },
  reducers: {
    resetState(state, action) {
      state.isRunning = false;
      state.isDone = false;
    }
  },
  extraReducers: {
    [deleteContact.pending]: (state, action) => {
      state.isRunning = true;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.isRunning = false;
    },
    [deleteContact.rejected]: (state, action) => {
      console.log('delete contact rejected');
    }
  }
});

export default deleteContactSlice.reducer;

export const { resetState } = deleteContactSlice.actions;

// selectors

export const selectDeleteContactRunning = state => state.deleteContact.isRunning;
