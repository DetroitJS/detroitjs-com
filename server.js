const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const fs = require('fs')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname } = parsedUrl
    const path = /\/blog\/(.*)\/?$/.exec(pathname)

    if (path && path[1]) {
      const slug = path[1].replace(/\//, '')
      fs.readFile(`${__dirname}/content/${slug}.md`, 'utf8', function (err, content) {
        if (err) {
          res.statusCode = 500
          app.render(req, res, '/_error', {})
        } else {
          app.render(req, res, '/post', Object.assign({}, parsedUrl, { content }))
        }
      })
    } else {
      handle(req, res, parsedUrl)
    }
  })
  .listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
