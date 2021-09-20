import React from 'react'
import { 
  Switch,
  BrowserRouter as Router,
  Redirect,
  Route
  } from 'react-router-dom';

import { JournalScreen } from '../Components/Journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path='/auth' component={AuthRouter} />
        <Route exact path='/' component={JournalScreen} />

        <Redirect to='/auth/login' />
      </Switch>
    </Router>
  )
}
