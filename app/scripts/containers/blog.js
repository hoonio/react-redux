import React from 'react';
import { connect } from 'react-redux';

import { getBlogIfNeeded } from '../actions/blog-actions';
import BlogSnippet from '../components/blog-snippet';

class Blog extends React.Component {

  componentDidMount() {
    this.props.getBlogPosts();
  }

  render() {
    let blogPosts = null;
    if (this.props.posts) {
      blogPosts = (this.props.posts.map((post, index) => {
        const textPortion = post.summary.split('**');
        const title = (textPortion.length > 2) ? textPortion[1] : '';
        const snippet = (textPortion.length > 2) ? textPortion[2] : textPortion;
        return <BlogSnippet post={post} title={title} snippet={snippet} key={index} />;
      }));
    }

    return (
      <div className="container" id="blog">
        <div className="row">
          <h1></h1>
          <p></p>
        </div>
        <div className="card-columns">
          {blogPosts}
        </div>
      </div>
    );
  }

}

Blog.propTypes = {
  posts: React.PropTypes.array.isRequired,
  getBlogPosts: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  posts: state.blog.posts,
});

const mapDispatchToProps = (dispatch) => ({
  getBlogPosts: () => { dispatch(getBlogIfNeeded()) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
