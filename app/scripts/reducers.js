import { combineReducers } from 'redux'
import { REQUEST_BLOG, RECEIVE_BLOG } from './actions'

export const blog = (state = {
  isFetching: false,
  posts: []
}, action) => {
  switch (action.type) {
    case REQUEST_BLOG:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_BLOG:
      return Object.assign({}, state, {
        isFetching: false,
        posts: action.posts
      })
    default:
      return state
  }
}
