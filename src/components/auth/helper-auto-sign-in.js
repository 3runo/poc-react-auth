import { SIGN_IN_ACTION } from '../../actions/types'

export default function autoSignInDispatcher (strore) {
  const jwtToken = window.localStorage.getItem('jwt-token')
  if (jwtToken) {
    strore.dispatch({type: SIGN_IN_ACTION})
  }
}
