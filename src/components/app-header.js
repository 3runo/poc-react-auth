import React, { Component } from 'react'
import { Link } from 'react-router'

class AppHeader extends Component {
  render () {
    const pathName = window.location.pathname
    return (
    <nav className="navbar navbar-default">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/"> Authentication App </Link>
      </div>
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li className={pathName === '/' ? 'active' : ''}>
            <Link to="/"> Home
            </Link>
          </li>
          <li className={pathName === '/dashboard' ? 'active' : ''}>
            <Link to="/dashboard"> Dashboard
            </Link>
          </li>
          <li className={pathName === '/signin' ? 'active' : ''}>
            <Link to="/signin"> Sign in
            </Link>
          </li>
          <li className={pathName === '/signout' ? 'active' : ''}>
            <Link to="/signout"> Sign out
            </Link>
          </li>
          <li className={pathName === '/signup' ? 'active' : ''}>
            <Link to="/signup"> Sign up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    )
  }
}

export default AppHeader

// TODOS:
// get the current route to apply active class
