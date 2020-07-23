import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import store from './store';

import NavControl from 'components/navbar';
import AddContact from 'features/contactManager/AddContact';
import AllContacts from 'features/contactManager/AllContacts';

const Root = () => (
  <Provider store={store}>
    <Router>
      <NavControl />

      <Switch>
        <Route exact path="/add">
          <AddContact />
        </Route>
        <Route exact path="/contacts">
          <AllContacts />
        </Route>
        <Route path="*">
          <Redirect to="/contacts" />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

export default Root;
