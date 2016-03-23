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
    for (let i=0; i<25; i++){
      dataset.push({
        x: Math.random()*100,
        y: Math.random()*100,
        r: Math.random()*30
      })
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

    const xScale = d3.scale.linear()
      .domain([0, 100])
      .range([0, w]);

    const yScale = d3.scale.linear()
      .domain([0, d3.max(dataset, (d) => d.y )])
      .range([h, 0]);

    const colorScale = d3.scale.quantize()
      .domain([0, dataset.length])
      .range(['yellow', 'orange', 'purple']);

    svg.selectAll('circle')
      .data(dataset)
      .enter()
      .append('circle')
      .attr('class', 'bubble')
      .attr('cx', (d) => xScale(d.x))
      .attr('cy', (d) => yScale(d.y))
      .attr('r', (d) => d.r)
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
