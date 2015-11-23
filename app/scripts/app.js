import React from 'react';
import Addons from 'react-addons';
import Home from './components/home';

window.React = React;
const mountNode = document.getElementById('app');

var App = React.createClass({
  // getInitialState:function(){
  //   return {
  //     data: []
  //   }
  // },
  // componentWillMount:function(){
  //   reqwest({
  //     url:'http://filltext.com/?rows=10&val={randomNumber}',
  //     type: 'jsonp',
  //     success:function(resp){
  //       this.setState({data:resp});
  //       this.renderChart(this.state.data);
  //     }.bind(this)
  //   })
  // },
  componentWillReceiveProp:function(nextProps){
    if(nextProps.data){
      this.renderChart(nextProps.data)
    }
  },
  renderChart: function(dataset){
    d3.select('#'+this.props.target).selectAll('div')
      .data(dataset)
      .enter()
      .append('div')
      .attr('class', 'bar')
      .style('height', function(d){
        return d.val*5+'px';
      });
  },
  render: function(){
    return React.DOM.div({id:this.props.target});
    // return <div id="chart"></div>
  }
});

// React.render(<App />, mountNode);
// React.render(<Home/>, mountNode);
