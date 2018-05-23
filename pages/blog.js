import React from 'react';

const BlogSnippet = ({ post, title, snippet }) => (
  <div className="card">
    <a className={post.photos ? 'photo-link' : 'invisible'} href={post.post_url}>
      <img className="card-img-top img-fluid" src={post.photos[0].alt_sizes[2].url} alt={post.summary} />
    </a>
    <div className="card-block">
      <h4 className={title ? 'card-title' : 'invisible'}>{title}</h4>
      <p className="card-text">{snippet}</p>
      <a href={post.post_url} className={post.post_url ? 'btn btn-primary card-link' : 'invisible'}>Read</a>
    </div>
  </div>
)

export default class extends React.Component {
  static async getInitialProps({ req }) {
    return fetch(`https://api.tumblr.com/v2/blog/blog.hoonio.com/posts/photo?api_key=${process.env.TUMBLR_API_KEY}`)
    .then(res => res.json())
    .then(data => ({posts: data.response.posts}))
  }

  render() {
    const blogPosts = (this.props.posts.map((post, index) => {
      const textPortion = post.summary.split('**');
      const title = (textPortion.length > 2) ? textPortion[1] : '';
      const snippet = (textPortion.length > 2) ? textPortion[2] : textPortion;
      return <BlogSnippet post={post} title={title} snippet={snippet} key={index} />;
    }));

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
