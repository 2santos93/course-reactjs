import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { beforeGoogleLogin, beforeLogin } from "../../actions/auth";
import { useForm } from "./../../hooks/useForm";

export const LoginScreen = () => {
  const [formvalues, handleInputChange] = useForm();
  const {loading} = useSelector(state => state.ui)
  const dispatch = useDispatch();
  const { email, password } = formvalues;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(beforeLogin(email, password));
  };

  const onSubmitHandlerGoogle = () => {
    dispatch(beforeGoogleLogin());
  };

  return (
    <div>
      <h1 className="auth__header-login">Login</h1>
      <form onSubmit={onSubmitHandler} >
        <input
          type="email"
          name="email"
          className="auth__input"
          placeholder="Email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          className="auth__input"
          placeholder="Password"
          value={password}
          name="password"
          onChange={handleInputChange}
        />
        <button type="submit" className="auth__button" disabled={loading} >
          Login
        </button>
      </form>

      <div className="google-btn" onClick={onSubmitHandlerGoogle}>
        <div className="google-icon-wrapper">
          <img
            className="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="google button"
          />
        </div>
        <p className="btn-text">
          <b>Sign in with google</b>
        </p>
      </div>

      <div className="auth__footer">
        <Link to="/auth/register">Create new account</Link>
      </div>
    </div>
  );
};
