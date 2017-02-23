import React, {createClass} from 'react'
import Layout from '../components/layouts/master'
import Meetups from '../components/meetups'

export default () => (
<Layout>
    <div className="section" style={{background: '#f7df1e'}}>
        <h2 className="title is-2 has-text-centered">Upcoming Meetups</h2>
        <div className="container">
            <Meetups />
        </div>
    </div>
</Layout>
)
