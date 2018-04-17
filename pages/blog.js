import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import shortid from 'shortid'

class Blog extends React.Component {
  static getInitialProps ({ query: { posts } }) {
    return { posts }
  }

  render () {
    return (
      <Layout>
        <div className="ph3">
            <div className="measure lh-copy center">
              <ul>
              { this.props.posts.map((post, index) => (
                <li key={shortid.generate()}><a href={`/blog/${post.slug}`}>{post.meta.title}</a></li>
              ))}
              </ul>
            </div>
        </div>
      </Layout>
    )
  }
}

Blog.propTypes = {
  posts: PropTypes.array
}

export default Blog
