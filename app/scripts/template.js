import React from 'react';
import Nav from './components/navbar';
import Footer from './components/footer';

export default (props) => {
  return (
    <div className="index">
      <Nav />
      {props.children}
      <Footer />
    </div>
  )
}
