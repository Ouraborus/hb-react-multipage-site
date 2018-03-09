import React, { Component, Fragment } from 'react'
import './_navbar.scss'
export default class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: '',
      navbar: '',
      dropdownActive: 'navbar__dropdown--collapsed'
    }
    this.data = props.data
    this.generateLinkJSX = this.generateLinkJSX.bind(this)
    this.menuHandler = this.menuHandler.bind(this)
    this.dropdownHandler = this.dropdownHandler.bind(this)
  }
  render () {
    const style = {
      color: this.state.active ? this.props.color : 'black'
    }
    return (
      <Fragment>
        <nav className='navbar'>
          <button className={`navbar__icon ${this.state.active}`} onClick={this.menuHandler}>
            <span />
            <span />
            <span />
          </button>
          <img src={this.data.logo.link} alt={this.data.logo.img} />
          <div className={`navbar__list ${this.state.navbar}`}>
            <ul className='navbar__list-container'>
              {this.data.links.map(this.generateLinkJSX.bind(this))}
            </ul>

          </div>
        </nav>
      </Fragment>
    )
  }

  generateLinkJSX (element) {
    if (element.hasOwnProperty('href')) {
      return (
        <li className='navbar__link'>
          <b>
            <a href={element.href}> {element.label}
            </a>
          </b>
        </li>
      )
    } else {
      return (<li className='navbar__link' onClick={this.dropdownHandler}>
        <b>
          {element.label}
        </b>
        <ul className={`navbar__dropdown ${this.state.dropdownActive}`}>
          {this.data.links.forEach(subelement => {
            return (
              <li className='navbar__link'>
                <b>
                  <a href={subelement.href}> {subelement.label}</a>
                </b>
              </li>)
          })}
        </ul>
      </li>
      )
    }
  }
  menuHandler () {
    this.setState(this.state.active === 'active' ? {active: '', navbar: ''} : {active: 'active', navbar: 'navbar__list--active'})
  }
  dropdownHandler () {

  }
}
