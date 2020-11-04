import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import ErrorBoundary from '../error-boundary/';
const ProtectedRoute = ({
  component: Component,
  isAuthed,
  redirectTo,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthed ? (
        <ErrorBoundary>
          <Component {...props} />
        </ErrorBoundary>
      ) : (
        <Redirect to={redirectTo} />
      )
    }
  />
);

export default ProtectedRoute;
