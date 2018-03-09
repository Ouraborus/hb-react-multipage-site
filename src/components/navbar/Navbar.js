import React, { Fragment } from 'react'
import './_navbar.scss'
export default function Navbar ({ data }) {
  return (
    // finish navbar structure with simpleLinks and composedLinks
    <Fragment><nav className='navbar'>
      <button className='navbar__icon'>
        <span />
        <span />
        <span />
      </button>
      <img src={data.logo.link} alt={data.logo.img} />
      <div className='navbar__list'>
        <ul className='navbar__list-container'>
          {data.links.forEach(element => {
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
              return (<li className='navbar__link js-dropdown'>
                <b>
                  {element.label}
                </b>
                <ul className='navbar__dropdown navbar__dropdown--collapsed'>
                  {data.links.forEach(subelement => {
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
          })}
        </ul>

      </div>
    </nav>
    </Fragment>
  )
}
