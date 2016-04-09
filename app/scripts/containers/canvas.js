import React from 'react';
import { connect } from 'react-redux'

import { getCanvasIfNeeded } from '../actions/canvas-actions'
import Chart from '../components/chart'

class Canvas extends React.Component {
  componentDidMount() {
    this.props.dispatch(getCanvasIfNeeded())
  }

  render() {
    let dataset = null
    let chart = null
    let dataToPlot = []
    if (this.props.dataset) {
      dataset = (this.props.dataset.map((data, index) => {
        dataToPlot.push([new Date(data.date), data.close])
        return (<li className="list-group-item" key={index}>{data.date}</li>)
      }))
      chart = (<Chart dataset={dataToPlot} />)
    }

    return (
      <div className="container" id="canvas">
        <div className="row">
          <div className="col-sm-3 hidden-xs-down" id="sidebar-frame">
            <ul className="list-group">
              {dataset}
            </ul>
          </div>
          <div className="col-sm-9 col-xs-12" id="chart-frame">
            {chart}
          </div>
        </div>
      </div>
    )
  }
}

Canvas.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  dataset: React.PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return { dataset: state.canvas.dataset }
}

export default connect(mapStateToProps)(Canvas)
