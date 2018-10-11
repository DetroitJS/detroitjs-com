import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import Header from "./header";
import Footer from "./footer";
import "./styles/custom.css";

const Layout = ({ children, data, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
          meta={[
            {
              name: "description",
              content:
                "Detroit.js is a community of JavaScript developers in Detroit with meetups held monthly."
            },
            {
              name: "viewport",
              content: "initial-scale=1.0, width=device-width"
            },
            { name: "theme-color", content: "#ffffff" }
          ]}
          link={[
            {
              rel: "apple-touch-icon",
              sizes: "180x180",
              href: "/icons/apple-touch-icon.png"
            },
            {
              rel: "icon",
              type: "image/png",
              sizes: "16x16",
              href: "/icons/favicon-16x16.png"
            },
            {
              rel: "icon",
              type: "image/png",
              sizes: "32x32",
              href: "/icons/favicon-32x32.png"
            },
            {
              rel: "mask-icon",
              href: "/icons/safari-pinned-tab.svg",
              color: "#5bbad5"
            },
            {
              type: "text/css",
              rel: "stylesheet",
              href: "https://unpkg.com/tachyons@4.6.1/css/tachyons.min.css"
            },
            { rel: "manifest", href: "/icons/manifest.json" }
          ]}
        />
        <>
          <Header />
          {children}
          <Footer />
        </>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Layout;
