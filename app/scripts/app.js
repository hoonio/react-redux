import React from 'react';
import Addons from 'react-addons';
import Nav from './components/navbar';
import { Router, Route, hashHistory } from 'react-router';
import Home from './components/home';
import Portfolio from './components/portfolio';


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
        <Router history={hashHistory}>
          <Route path="/" component={Home}/>
          <Route path="/portfolio" component={Portfolio}/>
        </Router>
      </div>
    )
  }
});

React.render(<App />, document.getElementById('app'));
