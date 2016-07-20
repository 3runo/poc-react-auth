import { SIGN_IN_ACTION, SIGN_UP_ACTION, SIGN_OUT_ACTION, AUTH_ERROR_ACTION } from '../actions/types'

export default function authReducer (state = {}, action) {
  switch (action.type) {
    case SIGN_UP_ACTION:
      break
    case SIGN_IN_ACTION:
      return { ...state, isAuthenticated: true, message: '' }
    case SIGN_OUT_ACTION:
      return { ...state, isAuthenticated: false }
    case AUTH_ERROR_ACTION:
      return { ...state, message: action.payload }
  }

  return state
}
