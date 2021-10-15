import React from 'react';
import './login.css';
import { useDispatch } from 'react-redux';
import { startLogin, startRegister } from '../../actions/auth';

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const onLoginSubmitHandler = (e) => {
    e.preventDefault();
    const email = document.getElementById('lemail');
    const password = document.getElementById('lpassword');
    const emailValue = email.value;
    const passwordValue = password.value;

    if (emailValue.trim().length < 2 || passwordValue.trim().length < 6)
      return alert('error in login form');

    dispatch(startLogin(emailValue, passwordValue));
    email.value = '';
    password.value = '';
  };

  const onSubmitRegisterHandler = (e) => {
    e.preventDefault();
    const email = document.getElementById('Remail');
    const name = document.getElementById('Rname');
    const password = document.getElementById('Rpassword');
    const repeatPassword = document.getElementById('RrepeatPassword');

    const emailValue = email.value;
    const nameValue = name.value;
    const passwordValue = password.value;
    const repeatPasswordValue = repeatPassword.value;

    if (
      emailValue.trim().length < 2 ||
      passwordValue.trim().length < 6 ||
      nameValue.trim().length < 2 ||
      repeatPasswordValue !== passwordValue
    )
      return alert('error in register form');

    dispatch(startRegister(emailValue, passwordValue, nameValue));

    email.value = '';
    name.value = '';
    password.value = '';
    repeatPassword.value = '';
  };

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Login</h3>
          <form onSubmit={onLoginSubmitHandler}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                name="email"
                id="lemail"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                id="lpassword"
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Register</h3>
          <form onSubmit={onSubmitRegisterHandler}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                id="Rname"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                id="Remail"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                id="Rpassword"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Repeat password"
                name="repeatPassword"
                id="RrepeatPassword"
              />
            </div>

            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
