import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import { useForm } from "./../../hooks/useForm";
import { removeErrorAction, setErrorAction } from "../../actions/ui";
import { beforeRegister } from "../../actions/auth";

export const RegisterScreen = () => {
  const [formValues, handleInputChange] = useForm({});
  const dispatch = useDispatch();
  const {errorMsg} = useSelector(state => state.ui);

  const { email='', name='', password='', confirmPassword='' } = formValues;

  const registerHandler = (e) => {
    e.preventDefault();

    if(!isFormValid()) return dispatch(setErrorAction());

    dispatch(removeErrorAction());
    dispatch(beforeRegister(email, password, name));

  };

  const isFormValid = () => {

    if(
      !validator.isEmail(email+'') ||
      validator.isEmpty(name+'') ||
      validator.isEmpty(password+'') ||
      // !validator.isStrongPassword(password+'', [{minLength: 5}]) || doesnt work
      password.trim().length < 5 ||
      !validator.equals(password+'', confirmPassword+'')
    ) return false;

    return true;
  }

  return (
    <div>
      <h1 className="auth__header-login">Register</h1>
      <form action="">

          {
          errorMsg && (
            <div className="error mt-1">
              {errorMsg}
            </div>
          )
          }

        <input
          type="text"
          name="name"
          value={name}
          className="auth__input"
          placeholder="Name"
          autoComplete="off"
          onChange={handleInputChange}
        />
        <input
          onChange={handleInputChange}
          value={email}
          type="email"
          name="email"
          className="auth__input"
          placeholder="Email"
          autoComplete="off"
        />
        <input
          onChange={handleInputChange}
          type="password"
          name="password"
          value={password}
          className="auth__input"
          placeholder="Password"
        />
        <input
          onChange={handleInputChange}
          type="password"
          value={confirmPassword}
          name="confirmPassword"
          className="auth__input"
          placeholder="Confirm Password"
        />
        <button 
          type="submit" 
          className="auth__button"
          onClick={registerHandler}
        >
          Register
        </button>
      </form>

      <div className="auth__footer">
        <Link to="/auth/login">Already have an account?</Link>
      </div>
    </div>
  );
};
