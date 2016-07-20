import React, { Component } from 'react'

export default class ReduxFormFieldError extends Component {
  render () {
    const {field} = this.props

    if (field.touched && field.error) {
      return (
      <div className="text-danger">
        {field.error}
      </div>
      )
    }

    return false
  }
}
