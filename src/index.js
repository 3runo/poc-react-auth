import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { Router, browserHistory } from 'react-router'

import reducers from './reducers'
import appRoutes from './app-routes'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const appStateStore = createStoreWithMiddleware(reducers)
const renderAppTargetElement = document.querySelector('.container')

ReactDOM.render(
  <Provider store={appStateStore}>
    <Router history={browserHistory} routes={appRoutes}/>
  </Provider>, renderAppTargetElement)
