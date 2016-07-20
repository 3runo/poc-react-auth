import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchDashboardData } from '../actions'
import AppAlert from './utils/app-alert'

class Dashboard extends Component {
  componentWillMount () {
    this.props.fetchDashboardData()
  }

  render () {
    const {authMessage} = this.props
    return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h2>Heading</h2>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
            Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
          </p>
        </div>
        <div className="col-md-4">
          <h2>Heading</h2>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
            Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
          </p>
        </div>
        <div className="col-md-4">
          <h2>Heading</h2>
          <p>
            Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus
            commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
          </p>
        </div>
      </div>
      <AppAlert alert={authMessage} />
    </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    authMessage: state.dashboard.message
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchDashboardData}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
