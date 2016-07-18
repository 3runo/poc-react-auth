import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

class SignIn extends Component {
  constructor (props) {
    super(props)
    this.submitAction = this.submitAction.bind(this)
  }

  submitAction ({email, password}) {
    console.log(email, password)
  }

  render () {
    const {handleSubmit, fields: {email, password}} = this.props

    return (
    <form onSubmit={handleSubmit(this.submitAction)}>
      <fieldset>
        <label className="form-group">
          Email:
        </label>
        <input className="form-group" {...email} />
      </fieldset>
      <fieldset>
        <label className="form-group">
          Password:
        </label>
        <input className="form-group" {...password} />
      </fieldset>
      <button type="submit" className="btn btn-primary">
        Sign in
      </button>
    </form>
    )
  }
}

export default reduxForm({
  form: 'sign-in',
  fields: ['email', 'password']
}, null, null)(SignIn)
