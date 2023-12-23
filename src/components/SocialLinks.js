import React from 'react'
import { socialLinks } from '../data'

const SocialLinks = ({ parentclass }) => {
  return (
    <ul className={parentclass}>
      {socialLinks.map(({ id, href, icon }) => {
        return (
          <li>
            <a
              href={href}
              target="_blank"
              className="nav-icon"
              rel="noreferrer"
            >
              <i className={icon}></i>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialLinks
