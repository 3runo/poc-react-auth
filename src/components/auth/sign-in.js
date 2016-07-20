import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { reduxForm } from 'redux-form'

import { signInUser } from '../../actions'
import AppAlert from '../utils/app-alert'

class SignIn extends Component {
  constructor (props) {
    super(props)
    this.submitAction = this.submitAction.bind(this)
  }

  submitAction ({email, password}) {
    this.props.signInUser({email, password})
  }

  renderAppScopeAlert () {
    const message = this.props.authMessage
    if (message) {
      return (
      <div className="alert alert-danger">
        <strong>Oops! :</strong>
        {message}
      </div>
      )
    }
  }

  render () {
    const {authMessage, handleSubmit, fields: {email, password}} = this.props

    return (
    <form onSubmit={handleSubmit(this.submitAction)}>
      <fieldset className="form-group">
        <label>
          Email:
        </label>
        <input className="form-control" type="email" {...email} />
      </fieldset>
      <fieldset className="form-group">
        <label>
          Password:
        </label>
        <input className="form-control" type="password" {...password} />
      </fieldset>
      <AppAlert alert={authMessage}/>
      <button type="submit" className="btn btn-primary">
        Sign in
      </button>
    </form>
    )
  }
}

function mapStateToProps (state) {
  return {
    authMessage: state.auth.message
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({signInUser}, dispatch)
}

export default reduxForm({
  form: 'sign-in',
  fields: ['email', 'password']
}, mapStateToProps, mapDispatchToProps)(SignIn)
