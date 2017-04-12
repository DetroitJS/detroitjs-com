import React from 'react'
import PropTypes from 'prop-types'
import Meetup from './meetup'
import shortid from 'shortid'

const Meetups = props => (
  <div>
    {props.meetups.map((meetup, index) => (
      <Meetup
        key={shortid.generate()}
        title={meetup.name}
        date={meetup.time}
        description={meetup.description}
        url={meetup.event_url}
      />
    ))}
  </div>
)

Meetups.propTypes = {
  meetups: PropTypes.array
}

Meetups.displayName = 'Meetups'

export default Meetups
