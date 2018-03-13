import React, { Component, Fragment } from 'react'
import Dropdown from '../dropdown/Dropdown'
import './_navbar.scss'
export default class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false
    }
    this.data = props.data
    this.generateLinkJSX = this.generateLinkJSX.bind(this)
    this.menuHandler = this.menuHandler.bind(this)
  }
  render () {
    const state = {
      active: this.state.active ? 'active' : '',
      navbar: this.state.active ? 'navbar__list--active' : ''
    }
    return (
      <Fragment>
        <nav className='navbar'>
          <button className={`navbar__icon ${state.active}`} onClick={this.menuHandler}>
            <span />
            <span />
            <span />
          </button>
          <img src={this.data.logo.link} alt={this.data.logo.img} />
          <div className={`navbar__list ${state.navbar}`}>
            <ul className='navbar__list-container'>
              {this.data.links.map(this.generateLinkJSX.bind(this))}
            </ul>

          </div>
        </nav>
      </Fragment>
    )
  }

  generateLinkJSX (element) {
    return (
      <Dropdown data={element}
        ref={(click) => { this.click = click }} />
    )
  }
  menuHandler () {
    this.setState(this.state.active ? { active: false } : {active: true})
  }
}
