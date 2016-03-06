import React from 'react'

export default (props) => {
  let itemStyle = {
    border: '0px solid #ccc',
    color: '#000'
  }
  return (
    <div className="col-sm-4" style={itemStyle}>
      <div className="card">
        <img className="card-img-top img-fluid" src={props.item.gsx$image.$t} alt={props.item.gsx$imagealt.$t} />
        <div className="card-block">
          <h4 className="card-title">{props.item.gsx$title.$t}</h4>
          <p className="card-text">{props.item.gsx$description.$t}</p>
          <p className="card-text">{props.item.gsx$stacks.$t}</p>
          <a href="{props.item.gsx$link.$t}" className="btn btn- primary">Button</a>
        </div>
      </div>
    </div>
  )
}
