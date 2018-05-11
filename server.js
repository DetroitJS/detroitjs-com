const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const fs = require('fs')
const frontmatter = require('frontmatter')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname } = parsedUrl
    const blogPostPath = /\/blog\/(.*)\/?$/.exec(pathname)
    const blogIndexPath = /\/blog\/?$/.exec(pathname)

    function getPostContent (path) {
      return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', function (err, contents) {
          if (err) {
            reject(err)
          }

          resolve(contents)
        })
      })
    }

    function getPosts (path) {
      return new Promise((resolve, reject) => {
        fs.readdir(`${__dirname}/content`, (err, files) => {
          if (err) {
            reject(err)
          }

          resolve(files)
        })
      })
    }

    function postData (filename) {
      return getPostContent(`${__dirname}/content/${filename}`)
          .then(content => {
            const parsedContent = frontmatter(content)

            return {
              meta: parsedContent.data,
              slug: filename.replace('.md', ''),
              content: parsedContent.content
            }
          })
    }

    if (blogPostPath && blogPostPath[1]) {
      getPostContent(`${__dirname}/content/${blogPostPath[1]}.md`)
        .then(content => app.render(req, res, '/post', { content: frontmatter(content).content }))
    } else if (blogIndexPath) {
      getPosts(`${__dirname}/content`)
        .then(fileNames => Promise.all(fileNames.map(postFile => postData(postFile))))
        .then(posts => app.render(req, res, '/blog', { posts }))
    } else {
      handle(req, res, parsedUrl)
    }
  })
  .listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
