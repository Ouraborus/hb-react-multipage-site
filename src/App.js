import React, { Component, Fragment } from 'react'
import Test from './components/test/Test'

import './scss/main.scss'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: props.data
    }
  }

  render () {
    return (
      <Fragment>
        <Test data={this.state.title} />
      </Fragment>
    )
  }
}
