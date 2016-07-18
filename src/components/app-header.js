import React, { Component } from 'react'
import { Link } from 'react-router'

class AppHeader extends Component {
  render () {
    return (
    <nav className="navbar navbar-default">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/"> Authentication App
        </Link>
      </div>
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li className="active">
            <Link to="/"> Home
            </Link>
          </li>
          <li>
            <Link to="/signin"> Sign in
            </Link>
          </li>
          <li>
            <Link to="/signout"> Sign out
            </Link>
          </li>
          <li>
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
