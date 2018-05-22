import React from 'react';
import Product from '../components/product';
import Service from '../components/service';
import Contact from '../components/contact';
import '../styles/index.scss'

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const res = await fetch(process.env.GIST_HOME, {
      headers: {
        'content-type': 'application/json'
      }
    })
     return { contents: await res.json() }
  }

  render() {
    console.log(this.props.contents)
    return (
      <div id="home">
        <header>
          <div className="intro-text">
            <p>{this.props.contents.slogan}</p>
          </div>
        </header>
        <section id="services">
          <div className="container">
            <div className="row" id="who-we-are">
              <div className="col-sm-12 text-center">
                <h2 className="section-heading text-muted">{this.props.contents.company}</h2>
              </div>
            </div>
            <div className="row text-center" id="what-we-do">
              {this.props.contents.services.map((service, index) => (<Service serv={service} key={index} />))}
            </div>
          </div>
        </section>
        <section id="products">
          {this.props.contents.products.map((product, index) => (<Product prod={product} key={index} />))}
        </section>
        <section id="contact">
          <Contact form={this.props.contents.contact} />
        </section>
      </div>
    );
  }
}
