import 'babel-polyfill';
import jsonp from 'jsonp-es6';
import { dispatch } from 'react-redux';

export const REQUEST_STOCKLIST = 'REQUEST_STOCKLIST';

const requestStockList = () => ({
  type: REQUEST_STOCKLIST,
});

export const RECEIVE_STOCKLIST = 'RECEIVE_STOCKLIST';

const receiveStockList = (array) => ({
  type: RECEIVE_STOCKLIST,
  stockList: array,
});

export const SELECT_STOCK = 'SELECT_STOCK';

const selectStockName = (string) => ({
  type: SELECT_STOCK,
  stockSymbol: string,
});

export const REQUEST_STOCKDATA = 'REQUEST_STOCKDATA';

const requestStockData = (string) => ({
  type: REQUEST_STOCKDATA,
  stockSymbol: string,
});

export const RECEIVE_STOCKDATA = 'RECEIVE_STOCKDATA';

const receiveStockData = (array) => ({
  type: RECEIVE_STOCKDATA,
  dataset: array,
});

export const selectStock = (stockSymbol) => (dispatch) => {
  dispatch(selectStockName(stockSymbol));
};

export const getStockData = (stockSymbol) => (dispatch) => {
  dispatch(requestStockData(stockSymbol));
  return jsonp(('/brainwave/stock/' + stockSymbol))
    .then(resp => {
      dispatch(receiveStockData(resp));
    });
};

export const getCanvas = () => (dispatch) => {
  dispatch(requestStockList());
  return jsonp('/brainwave/list')
    .then(resp => {
      dispatch(receiveStockList(resp));
    });
};

export const getCanvasIfNeeded = () => (dispatch, getState) => {
  if (getState().canvas.ready) {
    return;
  }
  dispatch(getCanvas());
};
