import React from 'react';
import { ThemeProvider } from 'styled-components';
/* eslint-disable no-unused-vars */
import Shed, { createTheme, reset } from 'react-shed';
/* eslint-enable no-unused-vars */
import Head from 'next/head';
import Nav from 'components/nav';
import Footer from 'components/footer';

const theme = createTheme({
  sizes: 'diminished fourth',
  steps: 11,
  colors: {
    yellow: '#F8E100',
    black: '#363636',
    gray: '#7A7A7A',
    white: '#FFFFFF',
  },
  fonts: {
    sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;',
  },
});


const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div.shed
      ff="sans"
      c="black"
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Detroit JS Website" />
        <title>DetroitJS</title>
        <link rel="stylesheet" href="/static/app.css" />
      </Head>
      <header.shed py="2">
        <div.shed mb="1">
          <div.shed ta="c">
            <img
              style={{ maxWidth: '10rem' }}
              src="/static/detroit-js-logo.svg"
              alt="logo"
            />
          </div.shed>
        </div.shed>
        <Nav />
      </header.shed>
      {children}
      <Footer />
    </div.shed>
  </ThemeProvider>
);

export {
  Layout as default,
  theme,
};
