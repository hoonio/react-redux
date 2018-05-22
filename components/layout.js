import Nav from './navbar'
import Footer from './footer'

export default (props) => (
  <div className="index">
    <Nav />
    <div className="page">
      {props.children}
    </div>
    <Footer />
  </div>
);
