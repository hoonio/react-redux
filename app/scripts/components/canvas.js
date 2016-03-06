import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    reqwest({
      url:'http://filltext.com/?rows=10&val={randomNumber}',
      type: 'jsonp',
      success:function(resp){
        this.setState({data:resp});
        this.renderChart(this.state.data);
      }.bind(this)
    });
  }

  renderChart(dataset) {
    var svg = d3.select('#chart').append('svg')
      .attr('width', 400)
      .attr('height', 300);

    var multiplier = 8;

    svg.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', function(d,index){
        return index*22 + 2;
      })
      .attr('y', function(d){
        return 300 - d.val*multiplier;
      })
      .attr('width', 20)
      .attr('height', function(d){
        return d.val*multiplier;
     });
  }

  render() {
    return(
      <div id="canvas">
        <h1>Canvas</h1>
        <p>Playground for D3.js experiments</p>
        <div id="chart"></div>
      </div>
    );
  }
}
