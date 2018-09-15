import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Meetups from "../components/meetups";
import NoMeetup from "../components/noMeetup";

class IndexPage extends Component {
  static propTypes = {
    meetups: PropTypes.array
  };

  async componentDidMount() {
    const res = await axios.get("https://detroitjs.sixlabs.io/events");

    this.setState({ meetups: res.data.data });
  }

  state = {
    meetups: []
  };

  render() {
    if (this.state.meetups.length >= 1) {
      return (
        <div className="pa3 center cf">
          <h1 className="tc">Upcoming Meetups</h1>
          <Meetups meetups={meetups} />
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
