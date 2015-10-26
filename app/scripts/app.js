import React from 'react';
import Home from './components/home';

window.React = React;
const mountNode = document.getElementById('app');

var App = React.createClass({
  getDefaultProps:function(){
    return {
      txt: 'this is a default prop',
      cat: 0
    }
  },
  propTypes: {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
  },
  render: function(){
    var txt = this.props.txt;
    return (
      <div>
        <b>BOLD</b>
        <h1>{txt}</h1>
      </div>
    );
  }
});

React.render(<App />, mountNode);
// React.render(<Home/>, mountNode);
