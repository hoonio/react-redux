import React from 'react';

export default (props) => (
  <div className="col-sm-4">
    <span className="fa-stack fa-4x">
      <i className="fa fa-circle fa-stack-2x text-primary"></i>
      <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
    </span>
    <h4 className="service-heading">{props.serv.heading}</h4>
    <p className="text-muted">{props.serv.body}</p>
  </div>
);
