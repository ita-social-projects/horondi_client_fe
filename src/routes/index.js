import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Register from '../components/Register';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/register' exact component={Register} />
      </Switch>
    </Router>
  );
}

export default Routes;
