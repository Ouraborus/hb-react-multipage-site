import React, {Component, Fragment } from 'react'

export default class Dropdown extends Component {
  constructor (props) {
    super(props)
    this.state = {
      collapsed: true
    }
    this.data = props.data
    this.dropdownHandler = this.dropdownHandler.bind(this)
  }
  render () {
    const state = {
      collapsed: this.state.collapsed ? 'navbar__dropdown--collapsed' : ''
    }

    if (this.data.hasOwnProperty('href')) {
      return (
        <Fragment>
          <li className='navbar__link'>
            <b>
              <a href={this.data.href}> {this.data.label}
              </a>
            </b>
          </li>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <li className='navbar__link' onClick={this.dropdownHandler}>
            <b>
              {this.data.label}
            </b>
            <ul className={`navbar__dropdown ${state.collapsed}`}>
              {this.data.links.map(subelement => {
                return (
                  <Fragment>
                    <li className='navbar__link'>
                      <b>
                        <a href={subelement.href}> {subelement.label}</a>
                      </b>
                    </li>
                  </Fragment>
                )
              })}
            </ul>
          </li>
        </Fragment>
      )
    }
  }
  dropdownHandler () {
    this.setState(this.state.collapsed ? { collapsed: false } : {collapsed: true})
  }
}
