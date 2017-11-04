import React from 'react'
import NavLink from './navLink.js'
import sty from '../styles/index.scss'

const Footer = () => (
  <footer className="pv4 ph3 ph5-m ph6-l mid-gray bg">
    <div className="tc mt3">
      <NavLink />
    </div>
    <style dangerouslySetInnerHTML={{ __html: sty }} />
  </footer>
)

Footer.displayName = 'Footer'

export default Footer
