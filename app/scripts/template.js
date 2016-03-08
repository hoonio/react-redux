import React from 'react';
import Nav from './components/navbar';

export default (props) => {
  return (
    <div className="container-fluid">
      <Nav />
      {props.children}
    </div>
  )
}
