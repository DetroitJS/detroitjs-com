import React, { PropTypes } from "react"
import formatDate from "dateformat"

const EventItem = (props) => {
  const {
    // attendees_count,
    datetime,
    event_url,
    features,
    location,
    title,
  } = props.data
  return (
    <div
      className="
        c:black
        bg:yellow.25
        b-y:yellow.25
        b-y:.5
        Grid
      "
    >
      <div
        className="
          Grid-cell
          d:f
          flx-d:c
          j-c:c
          w:1of4
          m-w:7
          t-a:c
          p-y:.8
          bg:yellow.25
        "
      >
        <div
          className="
            f-f:serif
            f:2
            d:i-b
            p-x:.5
            b-b:yellow
            m-x:.7
          "
        >
          { formatDate(new Date(datetime), "mm/dd") }
        </div>
        <div
          className="c:black.75"
        >
          { formatDate(new Date(datetime), "h:MMTT") }
        </div>
      </div>
      <div
        className="
          Grid-cell
          w:3of4
          flx-g:1
          p-l:.7
          p-y:.5
          d:f
          flx-d:c
          j-c:s-b
          b-r:yellow.25
          b-r:.5
        "
      >
        <a
          href={ event_url }
          className="l-h:t f:2 m-b:.7"
        >
          { title }
        </a>
        <div className={ location.map_url ? "d:f j-c:s-b" : "d:f j-c:f-e" }>
          { location && location.map_url && location.name && location.address?
            <a className="d:f" href={ location.map_url }>
              <span className="f-s:i">
                <span className="f-s:n">📍</span>
                { location.name }
              </span>
            </a>
          : null }
          <ul className="p-x:.3 o:h">
            { features.map(f =>
              <li key={ f } className="fl:r p-x:.3">{ f }</li>
            ) }
            <li className="fl:r p-x:.3">🍏</li>
            <li className="fl:r p-x:.3">🍏</li>
            <li className="fl:r p-x:.3">🍏</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default EventItem

EventItem.propTypes = {
  data: PropTypes.shape({
    attendees_count: PropTypes.number,
    datetime: PropTypes.string,
    event_url: PropTypes.string,
    features: PropTypes.array,
    location: PropTypes.shape({
      address: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
      ]),
      name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
      ]),
      map_url: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
      ]),
    }),
    title: PropTypes.string,
  }),
}
