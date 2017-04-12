import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Layout from '../components/layout'
import Meetups from '../components/meetups'

const Index = ({ meetups }) => (
  <Layout>
    <div className="pa3 center cf">
      <h1 className="tc">Upcoming Meetups</h1>
      <Meetups meetups={meetups} />
    </div>
  </Layout>
)

Index.getInitialProps = async ({req}) => {
  const res = await axios.get('https://detroitjs.sixlabs.io/events')
  const meetups = res.data.data

  return { meetups }
}

Index.propTypes = {
  meetups: PropTypes.array
}

export default Index
