import { useContext } from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          useContext
        </NavLink>
        <div className="collapse navbar-collapse">
          
          <div className="navbar-nav">
            <NavLink activeClassName="active" className="nav-link" exact to="/">Home</NavLink>
            <NavLink activeClassName="active" className="nav-link" to="/login">Login</NavLink>
            <NavLink activeClassName="active" className="nav-link" to="/about">About</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
