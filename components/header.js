import React from 'react'
import Link from 'next/link'
import Nav from './nav'
import sty from '../styles/index.scss'

const Header = () => (
  <header className="bg">
    <div className="branding">
      <Link href="/">
          <a className="link black b f1 f-headline-ns tc db mb1 pt3" title="Home">Detroit.js</a>
      </Link>
      <p className="tc">A community of JavaScript developers in Detroit</p>
      <Nav />
    </div>
    <style dangerouslySetInnerHTML={{ __html: sty }} />
  </header>
)

Header.displayName = 'Header'

export default Header
