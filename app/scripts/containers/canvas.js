import React from 'react';
import { connect } from 'react-redux'

import { getCanvasIfNeeded } from '../actions/canvas-actions'
import Chart from '../components/chart'

class Canvas extends React.Component {
  componentDidMount() {
    this.props.dispatch(getCanvasIfNeeded())
  }

  render() {
    let stockList = null
    let chart = null
    if (this.props.stockList) {
      stockList = (this.props.stockList.map((stock, index) => {
        return (<li className="list-group-item" key={index}>{stock.replace('WIKI/','')}</li>)
      }))
    }

    if (this.props.dataset) {
      chart = (<Chart dataset={this.props.dataset} />)
    }

    return (
      <div className="container" id="canvas">
        <div className="row">
          <div className="col-sm-3 hidden-xs-down" id="sidebar-frame">
            <ul className="list-group">
              {stockList}
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
  stockList: React.PropTypes.array.isRequired,
  dataset: React.PropTypes.array
}

function mapStateToProps(state) {
  console.log(state)
  return { stockList: state.canvas.stockList }
}

export default connect(mapStateToProps)(Canvas)
