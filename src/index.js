import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { Router, browserHistory } from 'react-router'

import reducers from './reducers'
import appRoutes from './app-routes'
import autoSignInDispatcher from './components/auth/helper-auto-sign-in'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const appStateStore = createStoreWithMiddleware(reducers)
const renderAppTargetElement = document.querySelector('.container')

// Checking jwt token in user local store, and sign in automatically
autoSignInDispatcher(appStateStore)

ReactDOM.render(
  <Provider store={appStateStore}>
    <Router history={browserHistory} routes={appRoutes} />
  </Provider>, renderAppTargetElement)
