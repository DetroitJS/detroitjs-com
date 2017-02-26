import React from 'react';
import Shed from 'react-shed';
import Link from 'next/link';

export default () => (
  <nav>
    <div.shed
      d="f"
      jc="c"
    >
      <Link href="/">
        <a.shed
          c="gray"
          p=".9"
        >
          Home
        </a.shed>
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
    </div.shed>
  </nav>
);
