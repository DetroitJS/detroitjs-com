# DetroitJS Website

Powered by [Nextjs](https://github.com/zeit/next.js) and [Tachyons](http://tachyons.io)

# Setup
## Development
`npm i` or `yarn install`

## Production
`npm i --production` or `yarn install --production`

# Usage
## Development
`npm run dev`

## Production
`npm run build` then `npm start`

## Docker
The container will install all dependencies using Yarn and will expose the running application on port `3000`.

### Build Image 
`docker build -t detroitjs/detroitjs.com .`

### RUN
`docker run -d {host port}:3000 detroitjs/detroitjs.com`
