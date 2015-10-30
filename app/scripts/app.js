import React from 'react';
import Home from './components/home';

window.React = React;
const mountNode = document.getElementById('app');

var ReactMixin = {
  getInitialState:function(){
    return {count:0}
  },
  componentWillMount:function(){
    console.log('will mount!');
  },
  incrementCount:function(){
    this.setState({count: this.state.count+1})
  }
}

var App = React.createClass({
  mixins:[ReactMixin],
  render:function(){
    return <div><Button txt="this is the button" /><br /><Label txt="this is the label" /></div>
  }
});

var Button = React.createClass({
  mixins:[ReactMixin],
  render:function(){
    return <button onClick={this.incrementCount}>{this.props.txt} - {this.state.count}</button>
  }
});

var Label = React.createClass({
  mixins:[ReactMixin],
  componentWillMount:function(){
    setInterval(this.incrementCount,1000);
  },
  render:function(){
    return <label>{this.props.txt} - {this.state.count}</label>
  }
});


React.render(<App />, mountNode);
// React.render(<Home/>, mountNode);
