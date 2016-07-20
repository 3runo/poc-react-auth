import axios from 'axios'
import { browserHistory } from 'react-router'
import { SIGN_IN_ACTION, SIGN_UP_ACTION, SIGN_OUT_ACTION, AUTH_ERROR_ACTION, FETCH_DASHBOARD_ACTION, FETCH_DASHBOARD_ERR_ACTION } from './types'

const API_URL = 'http://localhost:3000'

function AxiosEmbedTokenGet (url) {
  const jwtToken = window.localStorage.getItem('jwt-token')
  return axios.get(`${API_URL}/`, {
    headers: { authorization: jwtToken }
  })
}

function successSignDefinition (response, dispatch) {
  // Update auth state
  dispatch({type: SIGN_IN_ACTION})
  // Save user token response.data.token
  window.localStorage.setItem('jwt-token', response.data.token)
  // Redirect user to the Dashboard
  browserHistory.push('/dashboard')
}

// AUTH

// Using "redux-thunk" to get access to dispatch method, and then execute it directly
export function signInUser ({email, password}) {
  return function signInUserDispatcher (dispatch) {
    axios.post(`${API_URL}/signin`, {email, password})
      .then(response => successSignDefinition(response, dispatch))
      .catch(reason => dispatch(authError(reason)))
  }
}

export function signUpUser ({email, password}) {
  return function signUpUserDispatcher (dispatch) {
    axios.post(`${API_URL}/signup`, {email, password})
      .then(response => successSignDefinition(response, dispatch))
      .catch(reason => dispatch(authError(reason)))
  }
}

export function signOutUser () {
  // Remove user token
  window.localStorage.removeItem('jwt-token')
  // Update auth state
  return { type: SIGN_OUT_ACTION }
}

export function authError (reason) {
  const message = reason.response.data.message || reason.response.data
  return {
    type: AUTH_ERROR_ACTION,
    payload: message
  }
}

// DASHBOARD 

export function fetchDashboardData () {
  return function fetchDashboardDataDispatcher (dispatch) {
    const request = new AxiosEmbedTokenGet(`${API_URL}/`)

    request.then(response => {
      dispatch({
        type: FETCH_DASHBOARD_ACTION,
        payload: response.data
      })
    }).catch(reason => dispatch(fetchError(reason, FETCH_DASHBOARD_ERR_ACTION)))
  }
}

export function fetchError (reason, type) {
  const message = reason.response.data.message || reason.response.data
  return {
    type: type,
    payload: message
  }
}
