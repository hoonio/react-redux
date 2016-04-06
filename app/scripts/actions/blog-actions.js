import 'babel-polyfill'
import jsonp from 'jsonp-es6'
import { dispatch } from 'react-redux'

export const REQUEST_BLOG = 'REQUEST_BLOG'

const requestBlog = () => ({
  type: REQUEST_BLOG
})

export const RECEIVE_BLOG = 'RECEIVE_BLOG'

const receiveBlog = (json) => ({
  type: RECEIVE_BLOG,
  posts: json
})

export const getBlog = () => {
  return (dispatch) => {
    dispatch(requestBlog())
    return jsonp('https://api.tumblr.com/v2/blog/blog.hoonio.com/posts/photo?api_key=o5UJwOYSdRtRCzAwTRfkHVuwUWmTKvmzevn31oTaZ854hHU2r6')
      .then(resp => {
        dispatch(receiveBlog(resp.response.posts))
      })
  }
}

export const getBlogIfNeeded = () => {
  return (dispatch, getState) => {
    if (getState().blog.ready) {
      return
    }
    return dispatch(getBlog())
  }
}
