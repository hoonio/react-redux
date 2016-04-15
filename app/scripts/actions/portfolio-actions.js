import reqwest from 'reqwest'

export const REQUEST_PORTFOLIO = 'REQUEST_PORTFOLIO'

const requestPortfolio = () => ({
  type: REQUEST_PORTFOLIO
})

export const RECEIVE_PORTFOLIO = 'RECEIVE_PORTFOLIO'

const receivePortfolio = (json) => ({
  type: RECEIVE_PORTFOLIO,
  items: json
})

const getPortfolio = () => {
  return (dispatch) => {
    dispatch(requestPortfolio())
    return reqwest({
      url: 'https://spreadsheets.google.com/feeds/list/1LNTNp3n_DYYq_dDLf7YdZyJWjI0soMn3MjYPeVLFSfk/1/public/values?alt=json-in-script',
      type: 'jsonp'
    })
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
