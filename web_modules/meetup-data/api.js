import fetch from "isomorphic-fetch"

const API_URL = "https://api.apifier.com/v1/m4naX6Mc7nWq8FasZ/crawlers/detroit-js-meetup/execute?token=EdpPeo99hPNpFTmQCEzviAC8u" // eslint-disable-line

const API = {
  scrapeEvents: (url = API_URL) => (
    fetch(url, {
      method: "post",
    })
    .then(res => res.json())
  ),
  getEvents: (url) => (
    fetch(url)
      .then(res => res.json())
  ),
}

export default API
