import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'
import SignIn from './components/auth/sign-in'
import SignOut from './components/auth/sign-out'
import SignUp from './components/auth/sign-up'

// <IndexRoute component={CoverPage} />
export default (
  <Route path="/" component={App}>
    <Route path="signin" component={SignIn} />
    <Route path="signout" component={SignOut} />
    <Route path="signup" component={SignUp} />
  </Route>
)
