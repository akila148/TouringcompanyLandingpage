import React from 'react'
import logo from '../images/logo.svg'

import Pagelinks from './Pagelinks'
import SocialLinks from './SocialLinks'

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* <!-- left this comment on purpose --> */}
          <Pagelinks parentclass="nav-links" childclass="nav-link"></Pagelinks>

          <SocialLinks parentclass="nav-icons" />
        </div>
      </nav>
    </>
  )
}

export default Navbar
