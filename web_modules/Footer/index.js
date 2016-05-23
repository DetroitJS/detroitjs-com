import React, { Component, PropTypes } from "react"
import twitterSvg from "../icons/iconmonstr-twitter-1.svg"
import gitHubSvg from "../icons/iconmonstr-github-1.svg"
import meetupSvg from "../icons/meetup.svg"
import Svg from "react-svg-inline"
import { Link } from "react-router"

export default class Footer extends Component {

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      pkg,
    } = this.context.metadata

    return (
      <footer className="c:yellow bg:black">
        <nav>
          <div className="d:f f-d:r a-s:c">
            <div className="d:f">
              { pkg.meetup &&
                <a
                  href={ `//meetup.com/${pkg.meetup}` }
                  className="d:i-b p-x:.8 p-y:1"
                >
                  <Svg svg={ meetupSvg } />
                </a>
              }
              { pkg.twitter &&
                <a
                  href={ `https://twitter.com/${pkg.twitter}` }
                  className="d:i-b p-x:.8 p-y:1"
                >
                  <Svg
                    svg={ twitterSvg }
                  />
                </a>
              }
              { pkg.repository &&
                <a
                  href={ pkg.repository }
                  className="d:i-b p-x:.8 p-y:1"
                >
                  <Svg svg={ gitHubSvg } />
                </a>
              }
            </div>
            <div className="d:f a-s:c c:white m-l:a">
              <Link
                to="code-of-conduct"
                className="p-x:.8 p-y:1 t-t:u f-s:i"
              >
                Code of Conduct
              </Link>
            </div>
          </div>
        </nav>
      </footer>
    )
  }
}
