import React from 'react'
import { pageLinks } from '../data'

const Pagelinks = ({ parentclass, childclass }) => {
  return (
    <ul className={parentclass} id={parentclass}>
      {pageLinks.map(({ id, href, text }) => {
        return (
          <li>
            <a href={href} className={childclass}>
              {text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default Pagelinks
