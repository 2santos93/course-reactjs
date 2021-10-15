import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ component: Component, isLogged, ...rest }) => {
  return (
    <Route
      component={(props) => {
        return !isLogged ? <Component {...props} /> : <Redirect to="/" />;
      }}
      {...rest}
    />
  );
};
