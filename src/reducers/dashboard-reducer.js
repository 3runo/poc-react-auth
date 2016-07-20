import { FETCH_DASHBOARD_ACTION, FETCH_DASHBOARD_ERR_ACTION } from '../actions/types'

export default function authReducer (state = {} , action) {
  switch (action.type) {
    case FETCH_DASHBOARD_ACTION:
      return {...state, data: action.payload}
    case FETCH_DASHBOARD_ERR_ACTION:
      return {...state, message: action.payload}
  }

  return state
}
