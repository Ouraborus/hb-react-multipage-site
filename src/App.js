import React, { Component, Fragment } from 'react'
import Test from './components/test/Test'
import Navbar from './components/navbar/Navbar'

import './scss/main.scss'

export default class App extends Component {
  render () {
    return (
      <Fragment>
        <Navbar data={this.props.data.navbar} />
        <Test data={this.props.data.test.title} />
      </Fragment>
    )
  }
}
