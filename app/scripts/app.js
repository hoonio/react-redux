import React from 'react';
import Home from './components/home';

window.React = React;
const mountNode = document.getElementById('app');

var PersonTable = React.createClass({
  getInitialState:function(){
    return {
      data: [
        {id: 1, fname: "Simon", lname: "Bailey"},
        {id: 2, fname: "Thomas", lname: "Bailey"},
        {id: 3, fname: "Will", lname: "Bailey"},
        {id: 4, fname: "Kent", lname: "Bailey"},
      ]
    }
  },

  render:function(){
    var rows = this.state.data.map(function(person, i){
      return <PersonRow data={person} key={i} />
    });
    return <table>{rows}</table>
  }
});

var PersonRow = React.createClass({
  render:function(){
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.fname}</td>
        <td>{this.props.data.lname}</td>
      </tr>
    )
  }
});

React.render(<PersonTable />, mountNode);
// React.render(<Home/>, mountNode);
