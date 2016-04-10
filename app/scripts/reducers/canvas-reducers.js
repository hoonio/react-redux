import { combineReducers } from 'redux'
import { REQUEST_CANVAS, RECEIVE_CANVAS } from '../actions/canvas-actions'

export default (state = { isFetching: false, ready: false, stockList:[] }, action) => {
  switch (action.type) {
    case REQUEST_CANVAS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_CANVAS:
      return Object.assign({}, state, {
        isFetching: false,
        ready: true,
        stockList: action.stockList
      })
    default:
      return state
  }
}
