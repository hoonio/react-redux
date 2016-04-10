import React from 'react';
import { DropTarget } from 'react-dnd'

import { ItemTypes } from '../constants';

const propTypes = {
  dataset: React.PropTypes.array.isRequired,
  isOver: React.PropTypes.bool.isRequired,
  ondrop: React.PropTypes.func.isRequired
}

class Chart extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.updatePlot = this.updatePlot.bind(this)
  }

  updatePlot() {
  }

  clearChart() {
    d3.select('#chart').select('svg').remove()
  }

  renderChart() {
    this.clearChart()

    const margin = { top: 20, right: 20, bottom: 40, left: 40 }
    const w = 600
    const h = 300 - margin.top - margin.bottom

    let svg = d3.select('#chart').append('svg')
      .attr('width', '100%')
      .attr('height', h + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left +', ' + margin.top + ')');

    const mindate = new Date(this.props.dataset[this.props.dataset.length-1].date)
    const maxdate = new Date(this.props.dataset[0].date)

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
      .domain([0, d3.max(this.props.dataset, (d) => d.close )])
      .range([h, 0]);

    const yAxis = d3.svg.axis()
      .scale(yScale)
      .orient('left');

    const lineFunc = d3.svg.line()
      .x((d) => (xScale(new Date(d.date))))
      .y((d) => (yScale(d.close)))
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

  componentDidUpdate(){
    if (this.props.isOver){
      this.clearChart()
    }
    else if (this.props.dataset.length > 0){
      this.renderChart()
    }
  }

  render() {
    const { connectDropTarget, isOver } = this.props

    return connectDropTarget(
      <div className="d3-canvas">
        {isOver && <div id="graph-dropzone"><p>Drop the item here</p></div>}
        <div id="chart"></div>
      </div>
    );
  }
}

const dragitemTarget = {
  drop(props, monitor) {
    props.ondrop()
  }
}

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

Chart.propTypes = propTypes

export default DropTarget(ItemTypes.DRAGITEM, dragitemTarget, collect)(Chart)
