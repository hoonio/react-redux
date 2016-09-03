import { combineReducers } from 'redux'
import * as types from '../actions/actionTypes'

export default (state = { isFetching: false, ready: false, items:[] }, action) => {
  switch (action.type) {
    case types.REQUEST_PORTFOLIO:
      return Object.assign({}, state, {
        isFetching: true
      })
    case types.RECEIVE_PORTFOLIO:
      return Object.assign({}, state, {
        isFetching: false,
        ready: true,
        items: action.items
      })
    default:
      return state
  }
}
