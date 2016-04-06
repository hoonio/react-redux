import React from 'react'

export default ({ post, title, snippet, index }) => (
  <div className="card">
    <a className={post.photos ? 'photo-link' : 'invisible'} href={post.post_url}>
      <img className='card-img-top img-fluid' src={post.photos[0].alt_sizes[2].url} alt={post.summary} />
    </a>
    <div className="card-block">
      <h4 className={title ? "card-title" : "invisible"}>{title}</h4>
      <p className="card-text">{snippet}</p>
      <a href={post.post_url} className={post.post_url ? 'btn btn-primary card-link' : 'invisible'}>Read</a>
    </div>
  </div>
);
