import React from 'react';
import Todo from './todo'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    reqwest({
      url:'//filltext.com/?rows=10&val={randomNumber}',
      type: 'jsonp',
      success:function(resp){
        this.setState({data:resp});
        this.renderChart(this.state.data);
      }.bind(this)
    });
  }

  renderChart(dataset) {
    d3.select('#chart').selectAll('div')
      .data(dataset)
      .enter()
      .append('div')
      .attr('class', 'bar')
      .style('height', function(d){
        return d.val*5+'px';
     });
  }

  render() {
    return(
      <div id="canvas" className="container">
        <h1>Canvas</h1>
        <p>Playground for D3.js experiments</p>
        <div id="chart"></div>
        <h1>Redux Todo App</h1>
        <Todo />
      </div>
    );
  }
}
