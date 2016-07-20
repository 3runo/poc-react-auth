import React, { Component } from 'react'

export default class AppAlert extends Component {
  render () {
    const {alert} = this.props

    if (!alert) {
      return false
    }

    return (
    <div key={Math.ceil(Math.random()*10)} className="alert alert-danger">
      <strong>Oops! : </strong>
      {alert}
    </div>
    )
  }
}
