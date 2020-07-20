import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import contactsApp from './reducers/'; 
import { loadState, saveState } from './localStorage';

const configureStore = () => {
  const persistedState = loadState();

  const store = createStore(
    contactsApp,
    persistedState
  );

  store.subscribe(throttle(() => {
    saveState({
      contacts: store.getState().contacts, 
    });
  }, 1000));

  return store;
};

export default configureStore;
