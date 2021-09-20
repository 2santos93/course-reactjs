import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { AUTH } from '../../types/Auth';

export const LoginScreen = ({history}) => {

  const {dispatch} = useContext(AuthContext);

  const loginHandler = () => {
    // history.push('/marvel');
    const loginAction = {
      type: AUTH.LOGIN,
      payload: {
        name: 'nelson'
      }
    }
    
    dispatch(loginAction);
    
    history.replace('/');
  }

  return (
    <>
      <h1>Login</h1>
      <hr />

      <button
        className='btn btn-primary'
        onClick={loginHandler}
      >
        Login
      </button>
    </>
  )
}
