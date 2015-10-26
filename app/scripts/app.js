import React from 'react';
import Home from './components/home';

window.React = React;
const mountNode = document.getElementById('app');

var App = React.createClass({
  render:function(){
    return <Button>I <Heart /> React</Button>
  }
});

var Button = React.createClass({
  render:function(){
    return <button>{this.props.children}</button>
  }
});

var Heart = React.createClass({
  render:function(){
    return <span className="glyphicon glyphicon-heart"></span>
  }
});

React.render(<App txt="this is the props value" />, mountNode);
// React.render(<Home/>, mountNode);
