import Link from 'next/link'

export default () => (
<nav className="nav ">
  <div className="nav-center">
    <Link href="/">
      <a className="nav-item">
        Home
      </a>
    </Link>
    <a className="nav-item" href="https://meetup.com/detroit-javascript">
      Meetup
    </a>
    <a className="nav-item" href="https://gitter.im/detroitjs/lobby">
      Chat
    </a>
    <a className="nav-item" href="https://github.com/detroitjs">
      Github
    </a>
    <a className="nav-item" href="https://twitter.com/detroit_js">
      Twitter
    </a>
  </div>
</nav>
)
