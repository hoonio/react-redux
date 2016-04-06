import 'babel-polyfill'
import jsonp from 'jsonp-es6'
import { createStore } from 'redux'
import { connect, dispatch, getState } from 'react-redux'

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

export const REQUEST_PORTFOLIO = 'REQUEST_PORTFOLIO'

const requestPortfolio = () => ({
  type: REQUEST_PORTFOLIO
})

export const RECEIVE_PORTFOLIO = 'RECEIVE_PORTFOLIO'

const receivePortfolio = (json) => ({
  type: RECEIVE_PORTFOLIO,
  items: json
})

export const getPortfolio = () => {
  return (dispatch) => {
    dispatch(requestPortfolio())
    return jsonp('https://spreadsheets.google.com/feeds/list/1LNTNp3n_DYYq_dDLf7YdZyJWjI0soMn3MjYPeVLFSfk/1/public/values?alt=json-in-script')
      .then(resp => {
        console.log(resp.feed.entry)
        dispatch(receivePortfolio(resp.feed.entry))
      })
  }
}

export const getPortfolioIfNeeded = () => {
  return (dispatch, getState) => {
    if (getState().portfolio.ready) {
      console.log('portfolio already exist ')
      return
    }
    console.log('portfolio fetch for first time ')
    return dispatch(getPortfolio())
  }
}
