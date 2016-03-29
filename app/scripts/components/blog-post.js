import React from 'react'

export default ({ post, index }) => (
  <div className="card">
    <a className={post.photos ? 'photo-link' : 'invisible'} href={'https://www.hoonio.com/blog/'+post.slug}>
      <img className='card-img-top img-fluid' src={post.photos[0].alt_sizes[2].url} alt={post.summary} />
    </a>
    <div className="card-block">
      <p className={post.caption ? 'card-text' : 'invisible'} dangerouslySetInnerHTML={{__html: post.summary}} />
      <a href={post.post_url} className={post.post_url ? 'btn btn-primary card-link' : 'invisible'}>Read</a>
    </div>
  </div>
);
