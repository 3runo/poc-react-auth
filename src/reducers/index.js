import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import authReducer from './auth-reducer'
import dashboardReducer from './dashboard-reducer'

const rootReducer = combineReducers({
  form: reduxFormReducer,
  auth: authReducer,
  dashboard: dashboardReducer
})

export default rootReducer
