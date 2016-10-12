import React, { Component } from "react"
import TopBarProgressIndicator from "react-topbar-progress-indicator"

TopBarProgressIndicator.config({
  barColors: {
    "0": "#fff",
    "1.0": "#fff",
  },
  shadowBlur: 5,
})

export default class PageLoading extends Component {

  render() {
    return (
      <div>
        <TopBarProgressIndicator />
        <div>
          <div />
        </div>
      </div>
    )
  }
}
