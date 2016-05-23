import React, { Component, PropTypes } from "react"

export default class PageError extends Component {

  static propTypes = {
    error: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
    errorText: PropTypes.string,
  };

  static defaultProps = {
    error: 404,
    errorText: "Page Not Found",
  };

  render() {
    const {
      error,
      errorText,
    } = this.props

    return (
      <div>
        <div>{ "😱 Oooops!" }</div>
        <div>
          <p>
            <strong>{ error }</strong>
            { " " }
            { errorText }
          </p>
          {
            error === 404 &&
            <div>
              { "It seems you find a broken link. " }
              { "Sorry about that. " }
              <br />
              { "Do not hesitate to report us this page 😁." }
            </div>
          }
        </div>
      </div>
    )
  }
}
