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
  initialState: {},
  reducers: {
    resetState(state, action) {
      state.isRunning = false;
      state.isDone = false;
    }
  },
  extraReducers: {
    [deleteContact.pending]: (state, action) => {
      state[action.meta.arg.id] = 'running';
    },
    [deleteContact.fulfilled]: (state, action) => {
      state[action.meta.arg.id] = 'done';
    },
    [deleteContact.rejected]: (state, action) => {
      console.log('delete contact rejected');
    }
  }
});

export default deleteContactSlice.reducer;

export const { resetState } = deleteContactSlice.actions;

// selectors

export const selectRunningIds = state => {
  const keys = Object.keys(state.deleteContact);
  return keys.filter(key => state.deleteContact[key] === 'running');
};
