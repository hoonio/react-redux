import React from 'react';
import Addons from 'react-addons';
import Router from './routes';
import Home from './components/home';
import Nav from './components/navbar';
import Portfolio from './components/Portfolio';

window.React = React;
const mountNode = document.getElementById('app');
const mountNav = document.getElementById('nav');

var App = React.createClass({
  mixins:[Addons.LinkedStateMixin],
  getInitialState:function(){
    return {
      name:'',
      email:'',
      phone:''
    }
  },
  // update:function(){
  //   this.setState({
  //     name:this.refs.name.getDOMNode().value,
  //     email:this.refs.email.getDOMNode().value
  //   })
  // },
  render:function(){
    return (
      <div></div>
    )
  }
});

React.render(<Portfolio />, mountNode);
React.render(<Nav />, mountNav);
