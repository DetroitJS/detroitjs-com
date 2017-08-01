import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import shortid from 'shortid'

const navigationLinks = [
  { name: 'Home', link: '/', router: true },
  { name: 'Meetup', link: 'https://www.meetup.com/Detroit-Javascript' },
  { name: 'Chat', link: 'https://detroitjs-slack.now.sh' },
  { name: 'Github', link: 'https://github.com/detroitjs' },
  { name: 'Twitter', link: 'https://twitter.com/detroit_js' },
  { name: 'Code of Conduct', link: '/code-of-conduct', router: true },
  { name: 'Learn JavaScript', link: '/learning', router: true }
]

const NextLink = ({ link }) => (
  <Link href={link.link}>
    <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l">{link.name}</a>
  </Link>
)

const SimpleLink = ({ link }) => (
  <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" target="_blank" href={link.link}>{link.name}</a>
)

const RenderLink = link => link.router
  ? (<NextLink link={link} key={shortid.generate()} />)
  : (<SimpleLink link={link} key={shortid.generate()} />)

NextLink.propTypes = {
  link: PropTypes.shape({
    link: PropTypes.string.isRequired
  })
}

SimpleLink.propTypes = {
  link: PropTypes.shape({
    link: PropTypes.string.isRequired
  })
}

const NavLink = () => (
  <nav className="container">
    {navigationLinks.map((link, i) => RenderLink(link, i))}
  </nav>
)

export default NavLink
