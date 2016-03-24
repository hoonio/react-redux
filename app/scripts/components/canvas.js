import React from 'react';
import _ from 'lodash';

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataset: []
    }
    this.initializeDataset()
    this.updatePlot = this.updatePlot.bind(this)
  }

  initializeDataset() {
    this.state.dataset = _.map(_.range(25), (i) => ({
      x: Math.round(Math.random() * 100),
      y: Math.round(Math.random() * 100),
      r: Math.round(5 + Math.random() * 10)
    }))
  }

  updatePlot() {
    const steppedTransition = (selection, dur) => {
      selection
        .transition()
        .duration(dur)
        .ease('elastic')
        .attr('cx', (d) => this.state.xScale(d.x))
        .attr('cy', (d) => this.state.yScale(d.y))
        .attr('r', (d) => d.r)
    }

    const newData = (datum) => {
      datum.x = Math.round(Math.random() * 100);
      datum.y = Math.round(Math.random() * 100);
      datum.r = Math.round(5 + Math.random() * 10);
    }

    console.log('update the plot')

    this.state.svg.selectAll('circle')
      .filter((d) => d.x < 50)
      .each(newData)
      .call(steppedTransition, 2000)

  }

  renderChart() {
    const margin = { top: 20, right: 20, bottom: 40, left: 40 }
    const w = 600 - margin.left - margin.right
    const h = 300 - margin.top - margin.bottom

    // d3.select('#chart').selectAll('div')
    //   .data(this.state.dataset)
    //   .enter()
    //   .append('div')
    //   .attr('class', 'bar')
    //   .style('height', function(d){
    //     return d.val*8+'px';
    // });
    this.state.svg = d3.select('#chart').append('svg')
      .attr('width', w + margin.left + margin.right)
      .attr('height', h + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left +', ' + margin.top + ')');

    this.state.xScale = d3.scale.linear()
      .domain([0, d3.max(this.state.dataset, (d) => d.x)])
      .range([0, w]);

    const xAxis = d3.svg.axis()
      .scale(this.state.xScale)
      .orient('bottom')
      .ticks(5)
      .innerTickSize(6)
      .outerTickSize(12)
      .tickPadding(12);

    this.state.svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0, '+ (h + 0) + ')')
      .call(xAxis);

    this.state.yScale = d3.scale.linear()
      .domain([0, d3.max(this.state.dataset, (d) => d.y )])
      .range([h, 0]);

    const yAxis = d3.svg.axis()
      .scale(this.state.yScale)
      .orient('left');

    this.state.svg.append('g')
      .attr('class', 'y axis')
      .attr('transform', 'translate(0, 0)')
      .call(yAxis);

    this.state.colorScale = d3.scale.quantize()
      .domain([0, this.state.dataset.length])
      .range(['yellow', 'orange', 'purple']);

    this.state.svg.selectAll('circle')
      .data(this.state.dataset)
      .enter()
      .append('circle')
      .attr('class', 'dot')
      .attr('cx', (d) => this.state.xScale(d.x))
      .attr('cy', (d) => this.state.yScale(d.y))
      .attr('r', (d) => d.r)
      .attr('fill', (d,i) => this.state.colorScale(i))
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
    this.renderChart()
  }

  render() {
    return(
      <div id="canvas" className="container">
        <h1>Canvas</h1>
        <p>Playground for D3.js experiments</p>
        <div id="chart"></div>
        <br />
        <button onClick={this.updatePlot} type="button" className="btn btn-success-outline">Update</button>
      </div>
    );
  }
}
