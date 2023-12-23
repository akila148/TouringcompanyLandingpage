import React from 'react'
import SocialLinks from './SocialLinks'
import Pagelinks from './Pagelinks'
const Footer = () => {
  return (
    <>
      <footer class="section footer">
        <Pagelinks parentclass="footer-links" childclass="footer-link" />
        <SocialLinks parentclass="footer-icons" />
        <p class="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date"></span> all rights reserved
        </p>
      </footer>
    </>
  )
}

export default Footer
