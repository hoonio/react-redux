import React from 'react';
import BlogSnippet from './blog-snippet'
import { connect } from 'react-redux'
import { getBlog } from '../actions'

class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.props.dispatch( getBlog() )
  }

  static fetchBlog({ params, store }) {
    return store.dispatch( getBlog() )
  }

  componentDidMount() {

  }

  render() {
    console.log(this.posts)
    return (
      <div className="container" id="blog">
        <div className="card-columns">
          {this.posts.map((post, index) => {
            const textPortion = post.summary.split('**')
            const title = (textPortion.length > 2) ? textPortion[1] : ''
            const snippet = (textPortion.length > 2) ? textPortion[2] : textPortion
            return <BlogSnippet post={post} title={title} snippet={snippet} key={index} />
          })}
        </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  console.log(state)
  return { posts: state.blog.posts }
}

export default connect(mapStateToProps)(Blog)
