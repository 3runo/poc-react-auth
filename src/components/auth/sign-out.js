import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { signOutUser } from '../../actions'

class SignOut extends Component {
  componentWillMount () {
    this.props.signOutUser()
  }

  render () {
    return (
    <div>
      You've been signed out.
    </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    signOutUser: signOutUser
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(SignOut)
