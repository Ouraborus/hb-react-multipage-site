import React, { Component } from 'react'
import './_test.scss'

export default class Test extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: props.data,
      message: ''
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }
  onChangeHandler (event) {
    this.setState({
      message: event.currentTarget.value
    })
  }

  componentDidMount () {
    this.input.focus()
  }
  render () {
    return (
      <section className='test'>
        <h1 className='test__title'>{this.state.title}</h1>
        <input type='text' onChange={this.onChangeHandler}
          ref={(input) => { this.input = input }} className='test__input' />
        <p className='test__result'>
          {this.state.message}
        </p>
      </section>
    )
  }
}
