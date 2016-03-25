import React from 'react';
import BlogPost from './blogpost'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      dataReady: false
    };
    reqwest({
      url:'https://api.tumblr.com/v2/blog/blog.hoonio.com/posts?api_key=o5UJwOYSdRtRCzAwTRfkHVuwUWmTKvmzevn31oTaZ854hHU2r6',
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
              switch(post.type) {
                case "quote": return <div className="card" key={index}>{post.slug}</div>
                default: return <BlogPost post={post} key={index} />
              }
            })}
          </div>
        </div>
      );
  }
}
