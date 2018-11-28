import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import jsonpAdapter from "axios-jsonp";
import Meetups from "../components/meetups";
import NoMeetup from "../components/noMeetup";

class IndexPage extends Component {
  static propTypes = {
    meetups: PropTypes.array
  };

  async componentDidMount() {
    const apiUrl = `https://api.meetup.com/Detroit-Javascript/events?&sign=true&photo-host=public&page=20`;
    const res = await axios({
      url: apiUrl,
      adapter: jsonpAdapter
    });
    const meetupData = res.data.data.map((meetup) => { return {
      title: meetup.name,
      date: meetup.time,
      description: meetup.description,
      url: meetup.link
    };});

    this.setState({ meetups: meetupData });
  }

  state = {
    meetups: []
  };

  render() {
    console.log('in renderer', this.state);
    if (this.state.meetups.length >= 1) {
      return (
        <div className="pa3 center cf">
          <h1 className="tc">Upcoming Meetups</h1>
          <Meetups meetups={this.state.meetups} />
        </div>
      );
    } else {
      return (
        <div className="pa3 center cf">
          <NoMeetup />
        </div>
      );
    }
  }
}

export default IndexPage;
