import React from 'react';
import { connect } from 'react-redux'
import { DragDropContext } from 'react-dnd';

import Dragitem from '../components/dragitem';
import Chart from '../components/chart';

class Canvas extends React.Component {
  static async getInitialProps({ req, store, isServer, pathname}) {
    store.dispatch({type: 'CHANGING_PAGE', status: pathname})
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    return fetch(baseUrl + '/brainwave/list')
    .then(res => res.json())
    .then(data => ({
      stockList: data
    }))
  }

  render() {
    console.log(this.props.stockList)
    const stockList = this.props.stockList ? (this.props.stockList.map((stock, index) =>
      // <div key={index}>{stock}</div>
      <Dragitem key={index}
        onclick={() => this.props.selectStock(stock.replace('WIKI/', ''))}
        name={stock.replace('WIKI/', '')}
      />
    )) : null

    const chart = this.props.dataset ? (<Chart dataset={this.props.dataset}
      ondrop={() => this.props.getStockData(this.props.selectedStock)}
    />) : null
    // const chart = 'chart'

    return (
      <div className="container" id="canvas">
        {/*<h1>Time Series</h1>
        <p className="lead">Drag any of the stock symbols below to area on the right</p>*/}
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

const mapStateToProps = (state) => {
  console.log(state)
  return {
  // dataset: state.canvas.dataset,
  selectedStock: state.selectedStock,
}}

const mapDispatchToProps = (dispatch) => ({
  selectStock: (symbol) => { dispatch(selectStock(symbol)) },
})

export default connect(mapStateToProps)(Canvas)
