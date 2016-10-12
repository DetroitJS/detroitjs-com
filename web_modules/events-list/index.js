import React, { PropTypes } from "react"

import Item from "./item"

const EventsList = ({ data }) => {
  return (
    <ol className="m-w:md m-x:a">
      { data.map(item =>
        <li key={ item.datetime }>
          <Item data={ item } />
        </li>
      ) }
    </ol>
  )
}

export default EventsList

EventsList.propTypes = {
  data: PropTypes.array,
}
