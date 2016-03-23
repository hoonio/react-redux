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
    for (let i=0; i<75; i++){
      dataset.push(Math.random()*10)
    }
    console.log(dataset);
    const w = 600
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

    const xScale = d3.scale.ordinal()
      .domain(dataset)
      .rangeBands([0, w], 0.01, 1);

    const yScale = d3.scale.linear()
      .domain([0, d3.max(dataset) * 1.1])
      .range([0, h]);

    const colorScale = d3.scale.quantize()
      .domain([0, dataset.length])
      .range(['yellow', 'orange', 'purple']);

    // const colorScale = d3.scale.quantile()
    //   .domain([0, 10, dataset.length]-10, dataset.length)
    //   .range(['yellow', 'orange', 'green', 'purple']);

    svg.selectAll('div')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => xScale(d))
      .attr('y', (d) => 300 - yScale(d))
      .attr('width', xScale.rangeBand())
      .style('height', (d) => yScale(d))
      .attr('fill', (d, i) => colorScale(i))
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
