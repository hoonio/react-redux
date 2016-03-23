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
    let dataset = []
    // dataset = dataset.map((val) => val*Math.random())
    for (let i=0; i<15; i++){
      dataset.push(Math.random()*10)
    }
    console.log(dataset);
    const w = 400
    const h = 300

    // d3.select('#chart').selectAll('div')
    //   .data(dataset)
    //   .enter()
    //   .append('div')
    //   .attr('class', 'bar')
    //   .style('height', function(d){
    //     return d.val*8+'px';
    // });
    const svg = d3.select('#chart').append('svg')
      .attr('width', w)
      .attr('height', h);

    let yScale = d3.scale.linear()
      .domain([0, d3.max(dataset) * 1.1])
      .range([0, h]);

    svg.selectAll('div')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', function(d,i) {
        return i*20+2;
      })
      .attr('y', function(d) {
        return 300 - yScale(d);
      })
      .attr('width', 20)
      .style('height', function(d){
        return yScale(d);
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
