import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { TestContext } from "./context/TestContext";
import { NavBar } from "./NavBar";

import { About, Home, Login } from "./pages";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <TestContext.Provider value={{msg:'con provider pa'}} >
            <Route path="/about">
              <About />
            </Route>
          </TestContext.Provider>
          
          <Route exact path="/login">
            <Login />
          </Route>

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
