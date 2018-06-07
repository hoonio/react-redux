import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      sent: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target)
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(form) {
    try {
      var data = [].slice.call(form).map(function(control) {
        return 'value' in control && control.name ?
          control.name + '=' + (control.value === undefined ? '' : control.value) :
          '';
      }).join('&');
      var xhr = new XMLHttpRequest();

      xhr.open('POST', form.action + '/formResponse', true);
      xhr.setRequestHeader('Accept',
          'application/xml, text/xml, */*; q=0.01');
      xhr.setRequestHeader('Content-type',
          'application/x-www-form-urlencoded; charset=UTF-8');
      xhr.send(data);
    } catch(e) {}

    // form.parentNode.className += ' submitted';

    return false;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">{this.props.form.heading}</h2>
            <h3 className="section-subheading text-muted">{this.props.form.body}</h3>
          </div>
        </div>
        <form method="POST" action="https://docs.google.com/forms/d/e/1FAIpQLSdS_X4maRW2sNw1GPyOMZJGjLCi_FvCyGXamuHp1OOvArztGA/formResponse" id="ss-form" name="ss-form">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input type="text" className="form-control" name="entry.1000001" id="entry_0" placeholder="Name" required data-validation-required-message="Please enter your name." />
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input type="email" className="form-control" name="entry.1000002" id="entry_1" placeholder="Email" required data-validation-required-message="Please enter your email address." />
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <textarea className="form-control" name="entry.1000003" id="entry_2" placeholder="Message" rows="6" required data-validation-required-message="Please enter a message."></textarea>
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
    )
  }
}
