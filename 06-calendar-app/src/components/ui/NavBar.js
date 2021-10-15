import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startLogout } from './../../actions/auth';

export const NavBar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onClickLogoutHandler = () => {
    dispatch(startLogout());
  };
  return (
    <div className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {user.name}
        </a>
        <button
          onClick={onClickLogoutHandler}
          type="button"
          className="btn btn-danger"
        >
          Logout <i className="fas fa-sign-out-alt" />
        </button>
      </div>
    </div>
  );
};
