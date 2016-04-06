import { combineReducers } from 'redux'
import { REQUEST_PORTFOLIO, RECEIVE_PORTFOLIO } from '../actions/portfolio-actions'

export default (state = { isFetching: false, ready: false, items:[] }, action) => {
  switch (action.type) {
    case REQUEST_PORTFOLIO:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_PORTFOLIO:
      return Object.assign({}, state, {
        isFetching: false,
        ready: true,
        items: action.items
      })
    default:
      return state
  }
}
