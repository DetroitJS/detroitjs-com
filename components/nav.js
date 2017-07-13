import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <nav className="bb bt b--black-20 tc center bg-white">
    <Link href="/">
      <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l">Home</a>
    </Link>
    <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="https://www.meetup.com/Detroit-Javascript">Meetup</a>
    <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="https://detroitjs-slack.now.sh">Chat</a>
    <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="https://github.com/detroitjs">Github</a>
    <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="https://twitter.com/detroit_js">Twitter</a>
    <Link href="/code-of-conduct">
      <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l">Code of Conduct</a>
    </Link>
    <Link href="/learning">
      <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l">Learn JavaScript</a>
    </Link>
  </nav>
)

Nav.displayName = 'Nav'

export default Nav
