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

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
    // alert(`name:  ${this.state.name}, email:  ${this.state.email}, message:  ${this.state.message}`);
    fetch('/contact', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: this.state,
    })
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render() {
    // console.log(document.location)
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">{this.props.form.heading}</h2>
            <h3 className="section-subheading text-muted">{this.props.form.body}</h3>
          </div>
        </div>
        <form onSubmit={this.handleSubmit} action={this.props.form.url} id="ss-form" name="ss-form">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input name="name" type="text" className="form-control" placeholder="Name" required value={this.state.name} onChange={this.handleChange} />
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input name="email" type="email" className="form-control" placeholder="Email" required value={this.state.email} onChange={this.handleChange} />
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <textarea name="message" className="form-control" placeholder="Message" rows="6" required value={this.state.message} onChange={this.handleChange} />
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
