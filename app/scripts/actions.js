import { createStore } from 'redux'
import { connect, dispatch } from 'react-redux'

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
    console.log('blogreduce called')
    reqwest({
      url:'https://api.tumblr.com/v2/blog/blog.hoonio.com/posts/photo?api_key=o5UJwOYSdRtRCzAwTRfkHVuwUWmTKvmzevn31oTaZ854hHU2r6',
      type: 'jsonp',
      success:(resp) => {
        console.log(resp.response.posts)
        dispatch(receiveBlog(resp.response.posts))
        return resp.response.posts
      },
      error: (err) => {
        dispatch(receiveBlog(err))
        return err
      }
    })
  }
}
