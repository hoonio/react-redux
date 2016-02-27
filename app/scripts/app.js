import React from 'react';
import Addons from 'react-addons';
import Router from './routes';
import Home from './components/home';
import Nav from './components/navbar';
import Portfolio from './components/Portfolio';
import Main from './components/Main';

window.React = React;
const mountNode = document.getElementById('app');

var App = React.createClass({
  getInitialState(){
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
  render(){
    return (
      <div className="container">
        <Nav />
        <Main />
        <Portfolio />
      </div>
    )
  }
});

React.render(<App />, mountNode);
