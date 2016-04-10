import React from 'react';
import { connect } from 'react-redux'
import {DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import { getCanvasIfNeeded, selectStock, getStockData } from '../actions/canvas-actions'
import Dragitem from '../components/dragitem'
import Chart from '../components/chart'

class Canvas extends React.Component {
  componentDidMount() {
    this.props.getStockList()
  }

  render() {
    let stockList = null
    let chart = null
    if (this.props.stockList) {
      stockList = (this.props.stockList.map((stock, index) => {
        return (
          <Dragitem key={index} onclick={() => this.props.selectStock(stock.replace('WIKI/',''))} name={stock.replace('WIKI/','')} />
        )
      }))
    }

    console.log('updating chart component')
    chart = (<Chart dataset={this.props.dataset} ondrop={() => this.props.getStockData(this.props.selectedStock)} />)

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
  dataset: React.PropTypes.array,
  selectedStock: React.PropTypes.string.isRequired,
  getStockList: React.PropTypes.func.isRequired,
  selectStock: React.PropTypes.func.isRequired,
  getStockData: React.PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  console.log('canvas state updated')
  console.log(state)
  return {
    stockList: state.canvas.stockList,
    dataset: state.canvas.dataset,
    selectedStock: state.canvas.selectedStock
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStockList: () => { dispatch(getCanvasIfNeeded()) },
    selectStock: (symbol) => { dispatch(selectStock(symbol)) },
    getStockData: (symbol) => { dispatch(getStockData(symbol)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)((DragDropContext(HTML5Backend)(Canvas)))
