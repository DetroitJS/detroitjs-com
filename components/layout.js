import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export default ({children} = props) => (
    <div>
    <Head>
      <title>Detroit.js</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.6.1/css/tachyons.min.css"/>
      <style jsx global>{`
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
    `}</style>
    </Head>
    <Header />
      {children}
    <Footer />
    </div>
)
