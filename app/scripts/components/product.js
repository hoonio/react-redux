import React from 'react';

export default (props) => (
  <div className={(props.prod.imageOn=='right') ?
    'content-section-a' : 'content-section-b' }>
    <div className="container-fluid">
      <div className="row">
        <div className={(props.prod.imageOn=='right') ?
         'col-lg-5 push-lg-7 col-sm-6 push-sm-6' :
         'col-lg-5 col-sm-6' }>
          <div className="row">
            <a href={props.prod.target}>
              <img className="img-responsive img-fluid pull-sm-right" src={props.prod.img}/>
            </a>
          </div>
        </div>
        <div className={(props.prod.imageOn=='right') ?
        'col-lg-7 pull-lg-5 col-sm-6 pull-sm-6' :
        'col-lg-7 col-sm-6' }>
          <a href={props.prod.target}>
            <h2 className="section-heading">{props.prod.heading}</h2>
          </a>
          <p className="lead" dangerouslySetInnerHTML={{__html: props.prod.body}}></p>
        </div>
      </div>
    </div>
  </div>
)
