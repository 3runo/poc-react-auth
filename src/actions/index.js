import axios from 'axios'
import { browserHistory } from 'react-router'

import { SIGN_IN_ACTION, SIGN_UP_ACTION, SIGN_OUT_ACTION, AUTH_ERROR_ACTION } from './types'

const API_URL = 'http://localhost:3000'

// Using "redux-thunk" to get access to dispatch method, and then execute it directly
export function signInUser ({email, password}) {
  return function signInUserDispatcher (dispatch) {
    axios.post(`${API_URL}/signin`, {email, password})
      .then((response) => {
        // Update auth state
        dispatch({type: SIGN_IN_ACTION})
        // Save user token response.data.token
        window.localStorage.setItem('jwt-token', response.data.token)
        // Redirect user to the Dashboard
        browserHistory.push('/dashboard')
      })
      .catch((reason) => {
        authError(reason.response.data)
      })
  }
}

// export function signUpUser () {}
// export function signOutUser () {}
export function authError (error) {
  return {
    type: AUTH_ERROR_ACTION,
    payload: error
  }
}
