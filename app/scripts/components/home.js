import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        'Browserify',
        'Babel',
        'Bootstrap',
        'D3',
        'Python',
        'Node.js'
      ]
    };
  }

  render() {
    return (
      <div id="home">
        <header>
          <div className="container">
            <div className="row">
              <div className="intro-text">
                <img className="logo" src="http://hoon.io/logo144" />
                Bridging the gap between ideas and technology
              </div>
            </div>
          </div>
        </header>
        <section id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading">Services</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-primary"></i>
                  <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">E-Commerce</h4>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-primary"></i>
                  <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">Responsive Design</h4>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-primary"></i>
                  <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">Web Security</h4>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
            </div>
          </div>
        </section>
        <div className="content-section-a">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-sm-6">
                <hr className="section-heading-spacer" />
                <div className="clearfix"></div>
                <h2 className="section-heading">Feria de Junio</h2>
                <p className="lead">Recitals by and with Hoonio, with vision to deliver music in order to enlighten the audience, provide a different angle on their view on the world we live in, and foundation for musicians of next generation to proactively pursue their passion.</p>
              </div>
              <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                <img className="img-responsive" src="https://lh3.googleusercontent.com/-rJvz1oFhO8M/VV5qRPmP4gI/AAAAAAACjvo/UaSPg1n27f4/w980-h551-Ic42/feria-2015-header.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="content-section-b">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                <hr className="section-heading-spacer" />
                <div className="clearfix"></div>
                <h2 className="section-heading">3D Device Mockups
                  by PSDCovers</h2>
                <p className="lead">Turn your 2D designs into high quality, 3D product shots in seconds using free Photoshop actions by <a target="_blank" href="http://www.psdcovers.com/">PSDCovers</a>! Visit their website to download some of their awesome, free photoshop actions!</p>
              </div>
              <div className="col-lg-5 col-sm-pull-6  col-sm-6">
                <img className="img-responsive" src="img/dog.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="content-section-c">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-sm-6">
                <hr className="section-heading-spacer" />
                <div className="clearfix"></div>
                <h2 className="section-heading">Google Web Fonts and
                  Font Awesome Icons</h2>
                <p className="lead">This template features the 'Lato' font, part of the <a target="_blank" href="http://www.google.com/fonts">Google Web Font library</a>, as well as <a target="_blank" href="http://fontawesome.io">icons from Font Awesome</a>.</p>
              </div>
              <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                <img className="img-responsive" src="img/phones.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <section id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading">Contact Us</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <form name="sentMessage" id="contactForm">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Name *" id="name" required data-validation-required-message="Please enter your name." />
                        <p className="help-block text-danger"></p>
                      </div>
                      <div className="form-group">
                        <input type="email" className="form-control" placeholder="Your Email *" id="email" required data-validation-required-message="Please enter your email address." />
                        <p className="help-block text-danger"></p>
                      </div>
                      <div className="form-group">
                        <input type="tel" className="form-control" placeholder="Your Phone *" id="phone" required data-validation-required-message="Please enter your phone number." />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <textarea className="form-control" placeholder="Your Message *" id="message" required data-validation-required-message="Please enter a message."></textarea>
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-lg-12 text-center">
                      <div id="success"></div>
                      <button type="submit" className="btn btn-xl">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
