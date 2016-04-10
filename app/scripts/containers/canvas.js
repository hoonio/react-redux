import React from 'react';
import { connect } from 'react-redux'

import { getCanvasIfNeeded, selectStock } from '../actions/canvas-actions'
import Chart from '../components/chart'

class Canvas extends React.Component {
  componentDidMount() {
    this.props.getStockList()
  }

  componentDidUpdate() {
  }

  render() {
    let stockList = null
    let chart = null
    if (this.props.stockList) {
      stockList = (this.props.stockList.map((stock, index) => {
        return (<li className="list-group-item" key={index} onClick={() => this.props.selectStock(stock.replace('WIKI/',''))} >{stock.replace('WIKI/','')}</li>)
      }))
    }

    if (this.props.dataset) {
      chart = (<Chart dataset={this.props.dataset} />)
    }

    return (
      <div className="container" id="canvas">
        <div className="row">
          <h1>Canvas</h1>
          <p>Playground for D3.js experiments</p>
        </div>
        <div className="row">
          <div className="col-sm-3 col-xs-12" id="sidebar-frame">
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
  stockList: React.PropTypes.array.isRequired,
  getStockList: React.PropTypes.func.isRequired,
  dataset: React.PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    stockList: state.canvas.stockList,
    dataset: state.canvas.dataset
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStockList: () => { dispatch(getCanvasIfNeeded()) },
    selectStock: (symbol) => { dispatch(selectStock(symbol)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas)
