import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
// import throttle from 'lodash/throttle';

import 'sass/style.scss';

// import { loadState, saveState } from 'localStorage';
import Root from 'components/Root';
import rootReducer from 'reducers'; 

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
  // preloadedState: loadState()
});

// store.subscribe(throttle(() => {
//   saveState({
//     contacts: store.getState().contacts, 
//   });
// }, 1000));

ReactDOM.render(
  <React.StrictMode>
    <Root store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
