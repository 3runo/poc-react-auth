import { SIGN_IN_ACTION, SIGN_UP_ACTION, SIGN_OUT_ACTION, AUTH_ERROR_ACTION } from '../actions/types'

export function authReducer (state = {}, action) {
  switch (action.type) {
    case SIGN_UP_ACTION:
      break
    case SIGN_IN_ACTION:
      return { ...state, authenticated: true }
    case SIGN_OUT_ACTION:
      return { ...state, authenticated: false }
    case AUTH_ERROR_ACTION:
      return { ...state, message: action.payload }
  }

  return state
}
