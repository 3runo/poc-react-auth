import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { reduxForm } from 'redux-form'

import { signUpUser } from '../../actions'
import FieldError from '../utils/redux-form-field-error'
import AppAlert from '../utils/app-alert'

class SignUp extends Component {
  constructor (props) {
    super(props)
    this.submitAction = this.submitAction.bind(this)
  }

  submitAction (formProps) {
    this.props.signUpUser(formProps)
  }

  renderFildSets (fields) {
    var jsxFieldSets = []
    const fieldsMap = {
      email: 'Email',
      password: 'Password',
      passwordConfirm: 'Confirm password'
    }

    for (var key in fields) {
      if (fields.hasOwnProperty(key)) {
        var field = fields[key]

        jsxFieldSets.push(
          <fieldset key={key} className="form-group">
            <label>{fieldsMap[key]}:</label>
            <input className="form-control" type={key === 'email' ? 'email' : 'password'} {...field} />
            <FieldError field={field}/>            
          </fieldset>
        )
      }
    }
    return jsxFieldSets
  }

  render () {
    const {authMessage, handleSubmit} = this.props

    return (
    <form onSubmit={handleSubmit(this.submitAction)}>
      {this.renderFildSets(this.props.fields)}
      <AppAlert alert={authMessage}/>
      <button type="submit" className="btn btn-primary">
        Sign up
      </button>
    </form>
    )
  }
}

function validateReduxForm (formProps) {
  const errors = {}

  for (var key in formProps) {
    if (formProps.hasOwnProperty(key) && !formProps[key]) {
      errors[key] = `Please fill up the ${key} field`
    }
  }

  if (String(formProps.password).length > 0 &&
    String(formProps.passwordConfirm).length > 0 &&
    formProps.password !== formProps.passwordConfirm) {
    errors.passwordConfirm = "Passwords doesn't match"
  }

  return errors
}

function mapStateToProps (state) {
  return {
    authMessage: state.auth.message
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({signUpUser}, dispatch)
}

export default reduxForm({
  form: 'sign-up',
  validate: validateReduxForm,
  fields: ['email', 'password', 'passwordConfirm']
}, mapStateToProps, mapDispatchToProps)(SignUp)
