import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class AppHeader extends Component {
  renderLinks () {
    const path = window.location.pathname
    const {isAuthenticated} = this.props

    var jsxLinkList = [
      <li key={0} className={path === '/' ? 'active' : ''}>
        <Link to="/"> Home
        </Link>
      </li>
    ]

    if (isAuthenticated) {
      return [
        ...jsxLinkList,
        <li key={1} className={path === '/dashboard' ? 'active' : ''}>
          <Link to="/dashboard"> Dashboard
          </Link>
        </li>,
        <li key={2} className={path === '/signout' ? 'active' : ''}>
          <Link to="/signout"> Sign out
          </Link>
        </li>
      ]
    }

    return [
      ...jsxLinkList,
      <li key={3} className={path === '/signin' ? 'active' : ''}>
        <Link to="/signin"> Sign in
        </Link>
      </li>,
      <li key={4} className={path === '/signup' ? 'active' : ''}>
        <Link to="/signup"> Sign up
        </Link>
      </li>
    ]
  }

  render () {
    return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/"> Authentication App
        </Link>
      </div>
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          {this.renderLinks()}
        </ul>
      </div>
    </nav>
    )
  }
}

function mapStateToProps (state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(AppHeader)

// TODOS:
// Get the current route to apply active class
