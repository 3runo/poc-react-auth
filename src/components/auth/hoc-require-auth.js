import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function requireAuthDefinition (ComposedComponent) {
  class RequireAuth extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount () {
      if (!this.props.isAuthenticated) {
        this.context.router.push('/')
      }
    }

    componentWillUpdate (nextProps) {
      if (!nextProps.isAuthenticated) {
        this.context.router.push('/')
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

// TODO:
// Check if is possible to change context to browserHistory
