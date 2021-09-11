import React, { useContext } from "react";
import { 
  useRouteMatch, 
  useParams,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { TestContext } from "../context/TestContext";
import { UserContext } from "../context/UserContext";
import { Component } from "./Component";


const SpecificComponent = () => {
  let {id} = useParams();
  console.log("ENTRE");

  return (
    <div>
      Esto es un componente especifico {id}
    </div>
  )
}

export const About = () => {
  const { setUser } = useContext(UserContext);
  const msg = useContext(TestContext);
  console.log(JSON.stringify(msg));

  let match = useRouteMatch();
  console.log(match);

  let params = useParams();
  console.log(params);

  return (
    <div>
      <h1>About</h1>
      <hr />

      <button className="btn btn-danger" onClick={() => setUser({})}>
        Logout
      </button>

      <ul>
        <li>
          <NavLink to={`${match.url}/components`}>Components</NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/component/1`}>Specific Component</NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path={`${match.path}/components`}>
            <Component />
        </Route>

        <Route exact path={`${match.path}/component/:id`} component={SpecificComponent} />
      </Switch>
    </div>
  );
};
