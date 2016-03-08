import React from 'react'

export default ({item}) => (
  <div className="card">
    <div className="card-block">
      <h4 className="card-title">{item.gsx$title.$t}</h4>
      <h6 className="card-subtitle text-muted">{item.gsx$period.$t} {item.gsx$client.$t}</h6>
    </div>
    <img className="card-img-top img-fluid" src={item.gsx$image.$t} alt={item.gsx$imagealt.$t} />
    <div className="card-block">
      <p className="card-text">{item.gsx$stacks.$t}</p>
      <a href={item.gsx$link.$t} className="btn btn-primary card-link">Button</a>
      <a href={item.gsx$sourcecode.$t} className={item.gsx$sourcecode.$t ? 'card-link' : 'invisible'} >Source</a>
    </div>
  </div>
);
