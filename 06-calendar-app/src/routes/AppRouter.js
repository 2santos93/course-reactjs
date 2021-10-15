import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { useDispatch, useSelector } from 'react-redux';
import { checkingStart } from '../actions/auth';
import { PrivateRoute } from '../components/router/PrivateRoute';
import { PublicRoute } from '../components/router/PublicRoute';

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkingStart());
  }, []);

  return (
    <Router>
      <Switch>
        <PublicRoute
          component={LoginScreen}
          path="/login"
          isLogged={!!user?.uid}
          exact
        />
        <PrivateRoute
          exact
          path="/"
          component={CalendarScreen}
          isLogged={!!user?.uid}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
