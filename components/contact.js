import React from 'react';

export default (props) => (
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <h2 className="section-heading">{props.form.heading}</h2>
        <h3 className="section-subheading text-muted">{props.form.body}</h3>
      </div>
    </div>
    <form action={props.form.url} method="post" id="ss-form" name="ss-form">
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <input type="text" className="form-control" name="entry.0.single" id="entry_0" placeholder="Name" required data-validation-required-message="Please enter your name." />
            <p className="help-block text-danger"></p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input type="email" className="form-control" name="entry.1.single" id="entry_1" placeholder="Email" required data-validation-required-message="Please enter your email address." />
            <p className="help-block text-danger"></p>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <textarea className="form-control" name="entry.2.single" id="entry_2" placeholder="Message" rows="6" required data-validation-required-message="Please enter a message."></textarea>
          <p className="help-block text-danger"></p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 text-center">
          <div id="success"></div>
          <button type="submit" className="btn btn-xl">Send Message</button>
        </div>
      </div>
    </form>
  </div>
);
