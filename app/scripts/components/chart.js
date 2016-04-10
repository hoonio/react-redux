import React from 'react';

const propTypes = {
  dataset: React.PropTypes.array.isRequired
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

    console.log(this.props.dataset)
    const margin = { top: 20, right: 20, bottom: 40, left: 40 }
    const w = 600
    const h = 300 - margin.top - margin.bottom

    d3.select('#chart').select('svg').remove()

    let svg = d3.select('#chart').append('svg')
      .attr('width', '100%')
      .attr('height', h + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left +', ' + margin.top + ')');

    const mindate = new Date(this.props.dataset[this.props.dataset.length-1].date)
    const maxdate = new Date(this.props.dataset[0].date)

    console.log(mindate, maxdate)

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

  componentDidMount(){
    // console.log('componentDidMount')
    // if (this.props.dataset.length > 0){
    //   this.renderChart()
    // }
  }

  componentDidUpdate(){
    console.log('component did update')
    if (this.props.dataset.length > 0){
      this.renderChart()
    }
  }

  render() {
    return(
      <div className="d3-canvas">
        <div id="chart"></div>
      </div>
    );
  }
}

Chart.propTypes = propTypes

export default Chart
