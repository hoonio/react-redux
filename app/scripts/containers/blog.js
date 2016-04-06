import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as BlogActions from '../actions/blog-actions'
import BlogSnippet from '../components/blog-snippet'

class Blog extends React.Component {

  static fetchData(dispatch) {
    let blogActions = bindActionCreators(BlogActions, dispatch)
    return Promise.all([ blogActions.getBlogIfNeeded() ])
  }

  componentDidMount() {
    this.constructor.fetchData(this.props.dispatch)
  }

  render() {
    let blogPosts = null
    if (this.props.posts) {
      blogPosts = ( this.props.posts.map((post, index) => {
        const textPortion = post.summary.split('**')
        const title = (textPortion.length > 2) ? textPortion[1] : ''
        const snippet = (textPortion.length > 2) ? textPortion[2] : textPortion
        return <BlogSnippet post={post} title={title} snippet={snippet} key={index} />
      }))
    }

    return (
      <div className="container" id="blog">
        <div className="card-columns">
          {blogPosts}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.blog.posts }
}

export default connect(mapStateToProps)(Blog)
