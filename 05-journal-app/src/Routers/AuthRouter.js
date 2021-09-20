import React from "react";
import { Switch, useRouteMatch, Redirect, Route } from "react-router-dom";

import { LoginScreen } from "../Components/Auth/LoginScreen";
import { RegisterScreen } from "./../Components/Auth/RegisterScreen";

export const AuthRouter = () => {
  const match = useRouteMatch();
  return (
    <div className="auth__main">
      <div className='auth__box-main'>
        <Switch>
          <Route 
            exact 
            path={`${match.url}/login`} 
            component={LoginScreen} 
          />
          <Route
            exact
            path={`${match.url}/register`}
            component={RegisterScreen}
          />
          <Redirect to={`${match.url}/login`} />
        </Switch>
      </div>
    </div>
  );
};
