import React, { useEffect, useState } from 'react'
import { 
  Switch,
  BrowserRouter as Router,
  Redirect
  } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { JournalScreen } from '../Components/Journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

  const dispatch = useDispatch();
  const [state, setState] = useState({loading: true, isLogged: false})

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if(user?.uid){
        dispatch(login(user.uid, user.displayName));
        setState((prev) => setState({...prev, isLogged:true}));
      }else{
        setState((prev) => setState({...prev, isLogged:false}));
      }
      
      setState((prev) => setState({...prev, loading:false}));
    });
  }, [setState, dispatch])
  
if(state?.loading){
  return <h1>Loading</h1>
}

  return (
    <Router>
      <Switch>
        <PublicRoute component={AuthRouter} path='/auth' isLogged={state.isLogged}/>

        <PrivateRoute exact path='/' component={JournalScreen} isLogged={state.isLogged}/>

        <Redirect to='/auth/login' />
      </Switch>
    </Router>
  )
}
