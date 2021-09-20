import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const { state } = useContext(AuthContext);

  return (
    // <Router>
    //     <Switch>
    //       <Route exact path="/login" component={    (props) => (
    //         (!state.logged)
    //           ? (<LoginScreen {...props}/>)
    //           : (<Redirect to='/' />))
    //       }/>

    //       <Route path="/" component={ (props) => (
    //           (state.logged)
    //             ? (<DashboardRoutes {...props}/>)
    //             : (<Redirect to='/login' />)
    //         )
    //       }/>
    //     </Switch>
    // </Router>

    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
            isAuthenticated={state.logged}
          />

          <PrivateRoute
            path="/"
            component={DashboardRoutes}
            isAuthenticated={state.logged}
          />
        </Switch>
      </div>
    </Router>
  );
};
