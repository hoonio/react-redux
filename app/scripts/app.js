import React from 'react';
import Addons from 'react-addons';
import Home from './components/home';
import Nav from './components/navbar';

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
    )
  }
});

React.render(<Home/>, mountNode);
React.render(<Nav />, mountNav);
