import React, { Component, PropTypes } from "react"
import "babel-polyfill"
import Helmet from "react-helmet"
import Webfont from "webfontloader"
import WordHR from "word-hr"

import "./index.css"
import Header from "../Header"
import Footer from "../Footer"

const FONT_CONFIG = {
  typekit: {
    id: "evq8ujy",
  },
}

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  };

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  componentWillMount() {
    Webfont.load(FONT_CONFIG)
  }

  render() {
    const {
      pkg,
    } = this.context.metadata

    return (
      <div className="bg:white f-f:sans">

        <Helmet
          meta={
            [
              {
                name: "generator", content: `${
                process.env.PHENOMIC_NAME } ${ process.env.PHENOMIC_VERSION }`,
              },
              {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
              },
              { property: "og:site_name", content: pkg.name },
              { name: "twitter:site", content: `@${ pkg.twitter }` },
            ]
          }
          script={
            [
              {
                src: "https://cdn.polyfill.io/v2/polyfill.min.js",
              },
            ]
          }
        />

        <Header />
        <WordHR />
        <main role="main">
          { this.props.children }
        </main>
        <WordHR />
        <Footer />
      </div>
    )
  }
}
