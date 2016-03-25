import React from 'react'

export default ({ post, index }) => (
  <div className="card">
    <a className={post.photos ? 'photo-link' : 'invisible'} href={'https://www.hoonio.com/blog/'+post.slug}>
      <img className='img' src={post.image_permalink} alt={post.summary} />
    </a>
    <div className="card-block">
      <p className={post.body ? 'card-text' : 'invisible'} dangerouslySetInnerHTML={{__html: post.body}} />
      <p className={post.text ? 'card-text' : 'invisible'}>{post.text}</p>
      <a href={post.post_url} className={post.post_url ? 'btn btn-primary card-link' : 'invisible'}>Read</a>
    </div>
  </div>
);
