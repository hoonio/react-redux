import React from 'react';
import Nav from './components/navbar';

export default (props) => {
  return (
    <div className="container">
      <Nav />
      {props.children}
    </div>
  )
}
