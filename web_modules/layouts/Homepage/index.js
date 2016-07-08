import { connect } from "react-redux"
import React, { Component, PropTypes } from "react"
import EventsList from "events-list"
// import enhanceCollection from "phenomic/lib/enhance-collection"

import Home from "../Page/home"

// const numberOfLatestPosts = 6

class Homepage extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
  }

  componentDidMount() {
    this.props.getEvents()
  }

  render() {
    /*
     * const latestPosts = enhanceCollection(this.context.collection, {
     *   filter: { layout: "Post" },
     *   sort: "date",
     *   reverse: true,
     * })
     * .slice(0, numberOfLatestPosts)
     */

    return (
      <Home { ...this.props}>
          <div className="m-b:1">
            <EventsList data={ this.props.events } />
          </div>
      </Home>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getEvents: () => {
      dispatch({ type: "meetup/events/FETCH_REQUESTED" })
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage)

Homepage.propTypes = {
  getEvents: React.PropTypes.func,
  events: React.PropTypes.array,
}
