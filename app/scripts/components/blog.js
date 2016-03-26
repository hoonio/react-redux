import React from 'react';
import BlogSnippet from './blog-snippet'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      dataReady: false
    };
    reqwest({
      url:'https://api.tumblr.com/v2/blog/blog.hoonio.com/posts/photo?api_key=o5UJwOYSdRtRCzAwTRfkHVuwUWmTKvmzevn31oTaZ854hHU2r6',
      type: 'jsonp',
      success:(resp) => {
        this.setState({posts: resp.response.posts, dataReady: true})
      }
    });
  }

  render() {
    console.log('rendering started' + this.state.dataReady)
    console.log(this.state.posts)
      return (
        <div className="container" id="portfolio">
          <div className="card-columns">
            {this.state.posts.map((post, index) => {
              const textPortion = post.summary.split('**')
              const title = (textPortion.length > 2) ? textPortion[1] : ''
              const snippet = (textPortion.length > 2) ? textPortion[2] : textPortion
              return <BlogSnippet post={post} title={title} snippet={snippet} key={index} />
            })}
          </div>
        </div>
      );
  }
}
