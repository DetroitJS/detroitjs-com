import fetch from "isomorphic-fetch"
const API_URL = "https://api.apifier.com/v1/m4naX6Mc7nWq8FasZ/crawlers/detroit-js-meetup/execute?token=EdpPeo99hPNpFTmQCEzviAC8u" // eslint-disable-line

const API = {
  scrapeEvents: (url = API_URL) => {
    console.info("posting to", url)
    return fetch(url, {
      method: "post",
    })
    .then(res => res.json())
  },
  getEvents: (url) => {
    console.info("getting from", url)
    return fetch(url)
    .then(res => res.json())
  },
}

export default API
