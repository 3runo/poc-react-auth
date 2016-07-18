import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { reduxForm } from 'redux-form'

import { signInUser } from '../../actions'

class SignIn extends Component {
  constructor (props) {
    super(props)
    this.submitAction = this.submitAction.bind(this)
  }

  submitAction ({email, password}) {
    console.log(email, password)
    this.props.signInUser({email, password})
  }

  render () {
    const {handleSubmit, fields: {email, password}} = this.props

    return (
    <form onSubmit={handleSubmit(this.submitAction)}>
      <fieldset className="form-group">
        <label>
          Email:
        </label>
        <input className="form-control" {...email} />
      </fieldset>
      <fieldset className="form-group">
        <label>
          Password:
        </label>
        <input className="form-control" {...password} />
      </fieldset>
      <button type="submit" className="btn btn-primary">
        Sign in
      </button>
    </form>
    )
  }
}

function mapStateToProps (state) {
  authMessage = state.auth.message
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    signInUser: signInUser
  }, dispatch)
}

export default reduxForm({
  form: 'sign-in',
  fields: ['email', 'password']
}, mapStateToProps, mapDispatchToProps)(SignIn)
