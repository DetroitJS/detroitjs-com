import React, { Component } from 'react';
import Shed from 'react-shed';
import axios from 'axios';
import Meetup from './meetup';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      meetups: [],
    };
  }

  componentDidMount() {
    axios
    .get('https://detroitjs.sixlabs.io/events')
    .then((res) => {
      this.setState({ loading: false });
      this.setState({ meetups: res.data.data });
    });
  }

  render() {
    return (
      <div.shed
        ta="c"
      >
        {this.state.loading && <img src="/static/loader.svg" alt="loading" />}
        {this.state.meetups.length && this.state.meetups.map((meetup, index) => (
          <div key={meetup.name}>
            <Meetup
              title={meetup.name}
              description={meetup.description}
            />
            { index < (this.state.meetups.length - 1) ? <hr /> : '' }
          </div>
        ))}
      </div.shed>
    );
  }
}
