import React, { Component } from 'react'
import AppHeader from './app-header'

export default class App extends Component {
  render () {
    return (
    <div className="app">
      <AppHeader/>
      {this.props.children}
    </div>
    )
  }
}
