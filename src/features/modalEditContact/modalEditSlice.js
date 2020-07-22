import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'api';

import { updateContact as updateContactState } from 'features/contactManager/contactManagerSlice';

// thunks

export const updateContact = createAsyncThunk(
  'editContact/updateContact',
  async (data, { dispatch }) => {
    const result = await api.updateContact(data);
    if (result) dispatch(updateContactState(result));
    return result;
  }
);

// slice

const editContactSlice = createSlice({
  name: 'editContact',
  initialState: {
    isUpdating: false,
    isDone: false
  },
  reducers: {
    resetState(state, action) {
      state.isUpdating = false;
      state.isDone = false;
    }
  },
  extraReducers: {
    [updateContact.pending]: (state, action) => {
      state.isUpdating = true;
    },
    [updateContact.fulfilled]: (state, action) => {
      state.isUpdating = false;
      state.isDone = true;
    },
    [updateContact.rejected]: (state, action) => {
      console.log('fetch rejected');
    }
  }
});

export default editContactSlice.reducer;

export const { resetState } = editContactSlice.actions;

// selectors

export const selectEditContactUpdating = state => state.editContact.isUpdating;
export const selectEditContactDone = state => state.editContact.isDone;
