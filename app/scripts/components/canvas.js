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
        r: Math.random()*30+5
      })
    }
    console.log(dataset);
    const margin = { top: 20, right: 20, bottom: 40, left: 40 }
    const w = 600 - margin.left - margin.right
    const h = 300 - margin.top - margin.bottom

    // d3.select('#chart').selectAll('div')
    //   .data(dataset)
    //   .enter()
    //   .append('div')
    //   .attr('class', 'bar')
    //   .style('height', function(d){
    //     return d.val*8+'px';
    // });
    const svg = d3.select('#chart').append('svg')
      .attr('width', w + margin.left + margin.right)
      .attr('height', h + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left +', ' + margin.top + ')');

    const xScale = d3.scale.linear()
      .domain([0, d3.max(dataset, (d) => d.x)])
      .range([0, w]);

    const xAxis = d3.svg.axis()
      .scale(xScale)
      .orient('bottom')
      .ticks(5)
      .innerTickSize(6)
      .outerTickSize(12)
      .tickPadding(12);

    svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0, '+ (h + 0) + ')')
      .call(xAxis);

    const yScale = d3.scale.linear()
      .domain([0, d3.max(dataset, (d) => d.y )])
      .range([h, 0]);

    const yAxis = d3.svg.axis()
      .scale(yScale)
      .orient('left');

    svg.append('g')
      .attr('class', 'y axis')
      .attr('transform', 'translate(0, 0)')
      .call(yAxis);

    const colorScale = d3.scale.quantize()
      .domain([0, dataset.length])
      .range(['yellow', 'orange', 'purple']);

    svg.selectAll('circle')
      .data(dataset)
      .enter()
      .append('circle')
      .attr('class', 'dot')
      .attr('cx', (d) => xScale(d.x))
      .attr('cy', (d) => yScale(d.y))
      .attr('r', (d) => d.r)
      .attr('fill', (d,i) => colorScale(i))
      .on('mouseover', function(d){
        d3.select(this).classed('active', true)
      })
      .on('mouseout', function(d){
        d3.select(this).classed('active', false)
      })
      .on('mousedown', function(d){
        d3.select(this).attr('r', d.r*2)
      })
      .on('mouseup', function(d){
        d3.select(this).attr('r', d.r)
      })
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
