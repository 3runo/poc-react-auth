import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'
import AppHome from './components/app-home'
import Dashboard from './components/dashboard'
import RequireAuth from './components/auth/hoc-require-auth'
import SignIn from './components/auth/sign-in'
import SignOut from './components/auth/sign-out'
import SignUp from './components/auth/sign-up'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={AppHome} />
    <Route path="dashboard" component={RequireAuth(Dashboard)} />
    <Route path="signin" component={SignIn} />
    <Route path="signout" component={SignOut} />
    <Route path="signup" component={SignUp} />
  </Route>
)
