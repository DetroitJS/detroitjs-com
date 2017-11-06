import React from 'react'
import NavLink from './navLink.js'
import Circuits from './circuits'

const Footer = () => (
  <Circuits className="pv4 ph3 ph5-m ph6-l mid-gray">
    <div className="tc mt3">
      <NavLink />
    </div>
  </Circuits>
)

Footer.displayName = 'Footer'

export default Footer
