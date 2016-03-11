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
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-5 col-lg-offset-1 col-sm-6 col-sm-push-6">
                <div className="row">
                  <img className="img-responsive img-fluid img-rounded pull-sm-right" src="https://lh3.googleusercontent.com/-rJvz1oFhO8M/VV5qRPmP4gI/AAAAAAACjvo/UaSPg1n27f4/w980-h551-Ic42/feria-2015-header.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-5 col-sm-6 col-sm-pull-6">
                <hr className="section-heading-spacer" />
                <div className="clearfix"></div>
                <h2 className="section-heading">Feria de Junio</h2>
                <p className="lead">Recitals by and with Hoonio, with vision to deliver music in order to enlighten the audience, provide a different angle on their view on the world we live in, and foundation for musicians of next generation to proactively pursue their passion.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-section-b">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-5 col-lg-offset-1 col-sm-push-6 col-sm-6 col-xs12">
                <hr className="section-heading-spacer" />
                <div className="clearfix"></div>
                <h2 className="section-heading">Global AgeWatch Index 2015</h2>
                <p className="lead">Data visualization for HelpAge International which aims to support elderly around the globe. The work was featured in press coverage by <a target="_blank" title="Best and worst places to be old: interactive map" href="http://bit.ly/19YDIBV">The Guardian</a> and <a target="_blank" title="Lepiej niż w Polsce seniorom żyje się w Albanii, na Litwie czy Białorusi. Najgorzej jest z opieką zdrowotną Cały tekst" href="http://bit.ly/1fIVwIv">Wyborcza.pl</a></p>
              </div>
              <div className="col-lg-5 col-sm-pull-6 col-sm-6 col-xs-12">
              <div className="row">
                <img className="img-responsive img-fluid img-rounded pull-sm-right" src="https://lh3.googleusercontent.com/-TzWilRcgbbc/UktfVGEL8oI/AAAAAAAB5Sk/cPk3nN6PWOo/w980-h551/frontcover-agewatch.jpg" alt="" /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-section-a">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-5 col-sm-6">
                <hr className="section-heading-spacer" />
                <div className="clearfix"></div>
                <h2 className="section-heading">Densha de Tokyo</h2>
                <p className="lead">iOS application providing comprehensive guide for Tokyo Metropolitan Transit System. Tokyo's complex railway structure along with multiple private railway companies requires a different approach for creating an integrated transpiration guide to suit many of the commuters from the suburbs. Densha de Tokyo would like to take a different approach by providing a customized map with additional rail services including JR and major private lines.</p>
              </div>
              <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                <div className="row">
                  <img className="img-responsive img-fluid img-rounded pull-sm-right" src="https://lh3.googleusercontent.com/-sQSx-LtdT3g/VcaHUL1Z2oI/AAAAAAACjxo/Sr3OXnVK2Og/s800-Ic42/denshadetokyo.jpg" alt="" />
                </div>
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
