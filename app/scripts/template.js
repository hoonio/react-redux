import React from 'react';
import Nav from './components/navbar';
import Footer from './components/footer';

export default (props) => {
  return (
    <div className="index">
      <Nav />
      <div className="page">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};
