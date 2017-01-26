import { REQUEST_BLOG, RECEIVE_BLOG } from '../actions/blog-actions';

export default (state = { isFetching: false, ready: false, posts:[] }, action) => {
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
