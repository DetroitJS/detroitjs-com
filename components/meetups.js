import Meetup from './meetup'
import shortid from 'shortid'

export default props => (
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
