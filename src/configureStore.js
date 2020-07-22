import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import contactsApp from './reducers/';
import { loadState, saveState } from './localStorage';

const configureStore = option => {
  const persistedState = loadState();

  const store = createStore(contactsApp, persistedState, option);

  store.subscribe(
    throttle(() => {
      saveState({
        contacts: store.getState().contacts
      });
    }, 1000)
  );

  return store;
};

export default configureStore;
