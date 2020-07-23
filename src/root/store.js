import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import throttle from 'lodash/throttle';

import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';
import { replaceAllContactsNow } from 'api';

const savedState = loadState();

if (savedState) {
  const entities = savedState.contacts.entities;
  replaceAllContactsNow(Object.values(entities));
}

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production'
});

store.subscribe(
  throttle(() => {
    saveState({
      contacts: store.getState().contacts
    });
  }, 1000)
);

export default store;
