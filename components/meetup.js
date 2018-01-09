import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const formattedTime = time => moment(time).format('MMMM Do YYYY @ h:mm a')
const formatContent = content => ({
  __html: content.replace(/src="http\//gi, 'src="https')
})

const Meetup = (props) => (
  <article className="fl w-100 w-50-ns pa2 pa3-ns">
    <div className="bt bw2 b-solid" style={{borderColor: '#f7d71e'}}>
      <h2 className="f2 tc">{props.title}</h2>
      <h3 className="f3 tc">
        {formattedTime(props.date)}
      </h3>
      <div style={{background: '#f7df1e'}}>
        <div
          className="center measure lh-copy pa3 meetup-content"
          dangerouslySetInnerHTML={formatContent(props.description)}
        />
      </div>
      <a className="tc black ba b--black mt2 pa2 bg-white hover-bg-light-yellow db no-underline" href={props.url}>Event Details</a>
    </div>
    <style jsx global>{`
      .meetup-content a {
          color: black;
      }
    `}</style>
  </article>
)

Meetup.propTypes = {
  title: PropTypes.string,
  date: PropTypes.number,
  description: PropTypes.string,
  url: PropTypes.string
}

Meetup.displayName = 'Meetup'

export default Meetup
