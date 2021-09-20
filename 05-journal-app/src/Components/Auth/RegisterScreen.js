import React from "react";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
  return (
    <div>
      <h1 className="auth__header-login">Register</h1>
      <form action="">
        <input
          type="text"
          className="auth__input"
          placeholder="Name"
          autoComplete="off"
        />
        <input
          type="email"
          className="auth__input"
          placeholder="Email"
          autoComplete="off"
        />
        <input 
          type="password" 
          className="auth__input" 
          placeholder="Password"
        />
        <input
          type="password"
          className="auth__input"
          placeholder="Confirm Password"
        />
        <button type="submit" className="auth__button">
          Register
        </button>
      </form>

      <div className="auth__footer">
        <Link to="/auth/login">Already have an account?</Link>
      </div>
    </div>
  );
};
