import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

export default function requireAuthDefinition (ComposedComponent) {
  class RequireAuth extends Component {

    componentWillMount () {
      if (!this.props.isAuthenticated) {
        browserHistory.push('/')
      }
    }

    componentWillUpdate (nextProps) {
      if (!nextProps.isAuthenticated) {
        browserHistory.push('/')
      }
    }

    render () {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps (state) {
    return { isAuthenticated: state.auth.isAuthenticated }
  }

  return connect(mapStateToProps)(RequireAuth)
}