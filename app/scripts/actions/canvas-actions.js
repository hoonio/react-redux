import 'babel-polyfill'
import jsonp from 'jsonp-es6'
import { dispatch } from 'react-redux'

export const REQUEST_STOCKLIST = 'REQUEST_STOCKLIST'

const requestStockList = () => ({
  type: REQUEST_STOCKLIST
})

export const RECEIVE_STOCKLIST = 'RECEIVE_STOCKLIST'

const receiveStockList = (array) => ({
  type: RECEIVE_STOCKLIST,
  stockList: array
})

export const REQUEST_STOCKDATA = 'REQUEST_STOCKDATA'

const requestStockData = (string) => ({
  type: REQUEST_STOCKDATA,
  stockSymbol: string
})

export const RECEIVE_STOCKDATA = 'RECEIVE_STOCKDATA'

const receiveStockData = (array) => ({
  type: RECEIVE_STOCKDATA,
  dataset: array
})

export const selectStock = (stockSymbol) => {
  console.log('requesting '+stockSymbol)
  return (dispatch) => {
    dispatch(requestStockData(stockSymbol))
    return jsonp(('/brainwave/'+stockSymbol))
      .then(resp => {
        dispatch(receiveStockData(resp))
      })
  }
}

export const getCanvas = () => {
  return (dispatch) => {
    dispatch(requestStockList())
    return jsonp('/brainwave')
      .then(resp => {
        dispatch(receiveStockList(resp))
      })
  }
}

export const getCanvasIfNeeded = () => {
  return (dispatch, getState) => {
    if (getState().canvas.ready) {
      return
    }
    return dispatch(getCanvas())
  }
}
