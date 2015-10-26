import React from 'react';
import Home from './components/home';

window.React = React;
const mountNode = document.getElementById('app');

var App = React.createClass({
  getInitialState:function(){
    return {
      txt: 'the state txt'
    }
  },
  update:function(e){
    this.setState({txt: e.target.value})
  },
  render: function(){
    var txt = this.state.txt;
    return (
      <div>
        <input type="text" onChange={this.update} />
        <h1>{txt}</h1>
      </div>
    );
  }
});

React.render(<App txt="this is the props value" />, mountNode);
// React.render(<Home/>, mountNode);
