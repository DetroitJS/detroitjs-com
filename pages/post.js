import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import Markdown from 'react-markdown'

class Post extends React.Component {
  static getInitialProps ({ query: { content } }) {
    return { content }
  }

  render () {
    return (
      <Layout>
        <div className="ph3">
            <div className="measure lh-copy center">
              <Markdown source={this.props.content} />
            </div>
        </div>
      </Layout>
    )
  }
}

Post.propTypes = {
  content: PropTypes.string
}

export default Post
