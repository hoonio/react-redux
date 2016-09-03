import 'babel-polyfill'
import jsonp from 'jsonp-es6'
import { dispatch } from 'react-redux'
import * as types from './actionTypes'

export const requestPortfolio = () => ({
  type: types.REQUEST_PORTFOLIO
})

const receivePortfolio = (json) => ({
  type: types.RECEIVE_PORTFOLIO,
  items: json
})

const getPortfolio = () => {
  return (dispatch) => {
    dispatch(requestPortfolio())
    return jsonp('https://spreadsheets.google.com/feeds/list/1LNTNp3n_DYYq_dDLf7YdZyJWjI0soMn3MjYPeVLFSfk/1/public/values?alt=json-in-script')
      .then(resp => {
        dispatch(receivePortfolio(resp.feed.entry))
      })
  }
}

export const getPortfolioIfNeeded = () => {
  return (dispatch, getState) => {
    if (getState().portfolio.ready) {
      return
    }
    return dispatch(getPortfolio())
  }
}
