import { REQUEST_STOCKLIST, RECEIVE_STOCKLIST, REQUEST_STOCKDATA, RECEIVE_STOCKDATA } from '../actions/canvas-actions'

export default (state = { isFetching: false, ready: false, stockList:[], dataset:[] }, action) => {
  switch (action.type) {
    case REQUEST_STOCKLIST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_STOCKLIST:
      return Object.assign({}, state, {
        isFetching: false,
        ready: true,
        stockList: action.stockList
      })
    case REQUEST_STOCKDATA:
      return Object.assign({}, state, {
        isFetching: true,
        ready: false,
        selectedStock: action.stockSymbol
      })
    case RECEIVE_STOCKDATA:
      return Object.assign({}, state, {
        isFetching: false,
        ready: true,
        dataset: action.dataset
      })
    default:
      return state
  }
}
