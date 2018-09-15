# DetroitJS Website
[![Build Status](https://travis-ci.org/DetroitJS/detroitjs-com.svg?branch=master)](https://travis-ci.org/DetroitJS/detroitjs-com)

Powered by [Gatsby](https://github.com/gatsbyjs/gatsby) and [Tachyons](http://tachyons.io)

# Setup
## Development
`npm i` or `yarn install`

## Production
`npm build` or `yarn build`

# Usage
## Development
`npm run develop`

## Production
`npm build`

## Docker
The container will install all dependencies using Yarn and will expose the running application on port `8000`.

### Build Image
`docker build -t detroitjs/detroitjs.com .`

### Run
`docker run -d {host port}:8000 detroitjs/detroitjs.com`
