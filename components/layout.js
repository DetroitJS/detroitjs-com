import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export default ({children} = props) => (
    <div>
    <Head>
      <title>Detroit.js</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.6.1/css/tachyons.min.css"/>
    </Head>
    <Header />
      {children}
    <Footer />
    </div>
)
