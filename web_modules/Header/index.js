import React, { Component, PropTypes } from "react"
import { Link } from "react-router"
import {
  Wordmark as DetroitJSWordmark,
  Logo as DetroitJSLogo,
} from "theme"

export default class Header extends Component {
  
  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    return (
      <header
        className="bg:yellow-l"
      >
        <Link
          to="/"
        >
          <h1
            className="
              t-a:c
              l-h:d
              p-y:1
              d:b
              w:full
              m-w:md
              m-x:a
              p-x:1
            "
          >
            <DetroitJSWordmark />
          </h1>
          <div
            className="d:b w:full m-w:md m-x:a p-x:1 p-b:1"
          >
            <DetroitJSLogo />
          </div>
        </Link>
      </header>
    )
  }
}
