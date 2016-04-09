import React from 'react';

const propTypes = {
  dataset: React.PropTypes.array.isRequired,
}

class Chart extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.updatePlot = this.updatePlot.bind(this)
  }

  updatePlot() {
  }

  renderChart() {
    const margin = { top: 20, right: 20, bottom: 40, left: 40 }
    const w = 600
    const h = 300 - margin.top - margin.bottom

    let svg = d3.select('#chart').append('svg')
      .attr('width', '100%')
      .attr('height', h + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left +', ' + margin.top + ')');

    const mindate = this.props.dataset[this.props.dataset.length-1][0]
    const maxdate = this.props.dataset[0][0]

    let xScale = d3.time.scale()
      .domain([mindate, maxdate])
      .range([0, w-margin.right]);

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

    let yScale = d3.scale.linear()
      .domain([0, d3.max(this.props.dataset, (d) => d[1] )])
      .range([h, 0]);

    const yAxis = d3.svg.axis()
      .scale(yScale)
      .orient('left');

    const lineFunc = d3.svg.line()
      .x((d) => (xScale(d[0])))
      .y((d) => (yScale(d[1])))
      .interpolate('linear')

    svg.append('g')
      .attr('class', 'y axis')
      .attr('transform', 'translate(0, 0)')
      .call(yAxis);

    svg.append('path')
      .attr('d', lineFunc(this.props.dataset))
      .attr('stroke', 'blue')
      .attr('stroke-width', 2)
      .attr('fill', 'none')

  }

  componentDidMount(){
    if (this.props.dataset.length > 0){
      this.renderChart()
    }
  }

  componentDidUpdate(){
    if (this.props.dataset.length > 0){
      this.renderChart()
    }
  }

  render() {
    return(
      <div className="d3-canvas">
        <div className="row">
          <h1>Canvas</h1>
          <p>Playground for D3.js experiments</p>
          <div id="chart"></div>
        </div>
      </div>
    );
  }
}

Chart.propTypes = propTypes

export default Chart
