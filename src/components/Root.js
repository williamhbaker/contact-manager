import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AddContact from './AddContact';
import AllContacts from './AllContacts';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/add'>
          <AddContact />
        </Route>
        <Route exact path='/contacts'>
          <AllContacts />
        </Route>
        <Route path='*'>
          <Redirect to='/contacts' />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

export default Root;