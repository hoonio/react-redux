import React from 'react';

export default (props) => (
  <div className={(props.prod.imageOn=='right') ? 'content-section-a' : 'content-section-b' }>
    <div className="container-fluid">
      <div className="row">
        <div className={(props.prod.imageOn=='right') ? "col-lg-5 col-lg-offset-1 col-sm-6 col-sm-push-6" : "col-lg-5 col-sm-6" }>
          <div className="row">
            <a href={props.prod.target}><img className="img-responsive img-fluid pull-sm-right" src={props.prod.img} alt="" /></a>
          </div>
        </div>
        <div className={(props.prod.imageOn=='right') ? "col-lg-5 col-lg-offset-1 col-sm-6 col-sm-pull-6" : "col-lg-5 col-lg-offset-1 col-sm-6" }>
          <hr className="section-heading-spacer" />
          <div className="clearfix"></div>
          <a href={props.prod.target}><h2 className="section-heading">{props.prod.heading}</h2></a>
          <p className="lead" dangerouslySetInnerHTML={createMarkup(props.prod.body)}></p>
        </div>
      </div>
    </div>
  </div>
)

const createMarkup = (htmlString) => {
  return {__html : htmlString}
}
