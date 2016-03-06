import React from 'react'

export default (props) => {
  let itemStyle = {
    border: '0px solid #ccc',
    color: '#000'
  }
  return (
    <div className="card">
      <div className="card-block">
        <h4 className="card-title">{props.item.gsx$title.$t}</h4>
        <h6 className="card-subtitle text-muted">{props.item.gsx$period.$t} {props.item.gsx$client.$t}</h6>
      </div>
      <img className="card-img-top img-fluid" src={props.item.gsx$image.$t} alt={props.item.gsx$imagealt.$t} />
      <div className="card-block">
        <p className="card-text">{props.item.gsx$stacks.$t}</p>
        <a href={props.item.gsx$link.$t} className="btn btn-primary card-link">Button</a>
        <a href={props.item.gsx$sourcecode.$t} className={props.item.gsx$sourcecode.$t ? 'card-link' : 'invisible'} >Source</a>
      </div>
    </div>
  )
}
