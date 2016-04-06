import { combineReducers } from 'redux'
import { REQUEST_BLOG, RECEIVE_BLOG } from './actions'
import { REQUEST_PORTFOLIO, RECEIVE_PORTFOLIO } from './actions'

export const blog = (state = { isFetching: false, ready: false, posts:[] }, action) => {
  switch (action.type) {
    case REQUEST_BLOG:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_BLOG:
      return Object.assign({}, state, {
        isFetching: false,
        ready: true,
        posts: action.posts
      })
    default:
      return state
  }
}

export const portfolio = (state = { isFetching: false, ready: false, items:[] }, action) => {
  console.log(action.type)
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
