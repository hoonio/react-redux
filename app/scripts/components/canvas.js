import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    // reqwest({
    //   url:'//filltext.com/?rows=10&val={randomNumber}',
    //   type: 'jsonp',
    //   success:function(resp){
    //     this.setState({data:resp});
    //     this.renderChart(this.state.data);
    //   }.bind(this)
    // });
  }

  renderChart(remoteData) {

    console.log('Render D3')
    let dataset = [5,10,15,20,25]

    // d3.select('#chart').selectAll('div')
    //   .data(dataset)
    //   .enter()
    //   .append('div')
    //   .attr('class', 'bar')
    //   .style('height', function(d){
    //     return d.val*8+'px';
    // });
    var svg = d3.select('#chart').append('svg')
      .attr('width', 400)
      .attr('height', 300);
    console.log(svg)

    svg.selectAll('div')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', function(d,i) {
        return i*20+2;
      })
        .attr('y', function(d) {
          return 300 - d*8
        })
      .attr('width', 20)
      .style('height', function(d){
        return d*8;
     });
  }

  componentDidMount() {
    this.renderChart(this.state.data)
  }

  render() {
    return(
      <div id="canvas" className="container">
        <h1>Canvas</h1>
        <p>Playground for D3.js experiments</p>
        <div id="chart"></div>
      </div>
    );
  }
}
