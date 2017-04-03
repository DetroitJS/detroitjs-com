import React from 'react'
import axios from 'axios'
import Layout from '../components/layout'
import Meetups from '../components/meetups'

export default class extends React.Component {
  static async getInitialProps ({req}) {
    const res = await axios.get('https://detroitjs.sixlabs.io/events')
    const meetups = res.data.data

    return {meetups}
  }

  render  () {
    return <Layout>
      <div className="pa3 center cf">
        <h1 className="tc">Upcoming Meetups</h1>
        <Meetups meetups={this.props.meetups} />
      </div>
    </Layout>
  }
}
