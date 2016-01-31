import React from 'react';
import Addons from 'react-addons';
import Home from './components/home';

window.React = React;
const mountNode = document.getElementById('app');
const mountHome = document.getElementById('home');

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
      <form>
        <div>
          <input valueLink={this.linkState('name')} type="text" placeholder="Name" />
          <label>*{this.state.name}*</label>
        </div>
        <div>
          <input valueLink={this.linkState('email')} type="text" placeholder="Email" />
          <label>*{this.state.email}*</label>
        </div>
        <div>
          <input valueLink={this.linkState('phone')} type="text" placeholder="Phone" />
          <label>*{this.state.phone}*</label>
        </div>
      </form>
    )
  }
});

React.render(<App />, mountNode);
React.render(<Home/>, mountHome);
