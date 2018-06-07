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
    const formDest = `https://docs.google.com/forms/d/e/1FAIpQLSdS_X4maRW2sNw1GPyOMZJGjLCi_FvCyGXamuHp1OOvArztGA/formResponse`

    // alert(`name:  ${this.state.name}, email:  ${this.state.email}, message:  ${this.state.message}`);
    event.preventDefault();

    var xhr = new XMLHttpRequest();

    xhr.open('POST', formDest, true);
    xhr.setRequestHeader('Accept',
        'application/xml, text/xml, */*; q=0.01');
    xhr.setRequestHeader('Content-type',
        'application/x-www-form-urlencoded; charset=UTF-8');
    xhr.send({
      'entry.1000001': this.state.name,
      'entry.1000002': this.state.email,
      'entry.1000003': this.state.message,
    });

    // fetch(formDest, {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json',
    //     'Access-Control-Allow-Origin': '*'
    //   },
    //   mode: 'cors',
    //   body: JSON.stringify({
    //     'entry.1000001': this.state.name,
    //     'entry.1000002': this.state.email,
    //     'entry.1000003': this.state.message,
    //   }),
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
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
