import {createClass} from 'react'
import Meetup from './meetup'
import axios from 'axios'


export default createClass({
    getInitialState() {
        return {
            loading: true,
            meetups: []
        }
    },

    componentDidMount() {
        axios
            .get('https://detroitjs.sixlabs.io/events')
            .then((res) => {
                this.setState({loading: false})
                this.setState({meetups: res.data.data})
             })
    },

    render() {

        return (
            <div className="has-text-centered">
            {this.state.loading ? <img src="/static/loader.svg" /> : ''}
            {this.state.meetups.map((meetup, index) => (
              <div key={index}>
                <Meetup
                    date={meetup.time}
                    title={meetup.name}
                    description={meetup.description}
                />
                { index < (this.state.meetups.length - 1) ? <hr /> : '' }
                </div>
            ))}
            </div>
        )
    }
})
