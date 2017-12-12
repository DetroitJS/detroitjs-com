import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import Snowflakes from 'react-snowflakes'

const Layout = ({children}) => (
    <div>
    <Head>
      <title>Detroit.js</title>
      <meta name="description" content="Detroit.js is a community of JavaScript developers in Detroit with meetups held monthly." />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/icons/favicon-16x16.png" />
      <link rel="manifest" href="/static/icons/manifest.json" />
      <link rel="mask-icon" href="/static/icons/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.6.1/css/tachyons.min.css"/>
      <style dangerouslySetInnerHtml={{__html: `
      @font-face {
        font-family: 'neutraface2Text-Bold';
        src: url('/static/fonts/Neutraface2Text-Bold.eot');
        src: local('â˜º'), url('/static/fonts/Neutraface2Text-Bold.woff') format('woff'), url('/static/fonts/Neutraface2Text-Bold.ttf') format('truetype'), url('/static/fonts/Neutraface2Text-Bold.svg') format('svg');
        font-weight: normal;
        font-style: normal;
      }

      .branding [class*="headline"] {
        font-family: 'neutraface2Text-Bold', sans-serif !important;
      }
    `}}></style>
    <style>{`
      [data-reactroot] > * {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
      }
      [data-reactroot] > * > header + * {
        flex: 1;
      }
    `}</style>
    </Head>
    {new Date().getMonth() === 11 &&
      <Snowflakes numberOfSnowflakes={50}
            snowflakeColor="rgba(0,0,0,.2)"
            snowflakeChar="*"/>
    }
    <Header />
      {children}
    <Footer />
    </div>
)

Layout.propTypes = {
  children: PropTypes.element
}

Layout.displayName = 'Layout'

export default Layout
