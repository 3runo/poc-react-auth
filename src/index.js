import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, browserHistory } from 'react-router'

import reducers from './reducers'
import appRoutes from './app-routes'

const createStoreWithMiddleware = applyMiddleware()(createStore)
const appStateStore = createStoreWithMiddleware(reducers)
const appContainerDOM = document.querySelector('.container')

ReactDOM.render(
  <Provider store={appStateStore}>
    <Router history={browserHistory} routes={appRoutes}/>
  </Provider>,
  appContainerDOM)
