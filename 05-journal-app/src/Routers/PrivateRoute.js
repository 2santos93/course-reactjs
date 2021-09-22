import React from 'react'
import { Redirect, Route } from 'react-router'
import { PropTypes } from 'prop-types';

export const PrivateRoute = ({
  isLogged,
  component: Component,
  ...rest
}) => {
  return (
    <Route component={(routeProps) => (
      isLogged ? <Component {...routeProps} /> : <Redirect to='/login' />
    )} {...rest}/>
  )
}

PrivateRoute.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}