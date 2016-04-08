import { combineReducers } from 'redux'
import { REQUEST_CANVAS, RECEIVE_CANVAS } from '../actions/canvas-actions'

export default (state = { isFetching: false, ready: false, dataset:[] }, action) => {
  switch (action.type) {
    case REQUEST_CANVAS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_CANVAS:
      return Object.assign({}, state, {
        isFetching: false,
        ready: true,
        dataset: action.dataset
      })
    default:
      return state
  }
}
