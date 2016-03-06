import React from 'react'

export default (props) => {
  let itemStyle = {
    border: '1px solid #ccc',
    color: '#F00'
  }
  return (
    <div className="col-sm-4" style={itemStyle}>
      <div className="card">
        <img className="card-img-top" data-src="{props.item.gsx$image.$t}" alt="Card image cap" />
        <div className="card-block">
          <h4 className="card-title">{props.item.gsx$title.$t}</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the </p>
          <a href="#" className="btn btn-primary">Button</a>
        </div>
      </div>
    </div>
  )
}
