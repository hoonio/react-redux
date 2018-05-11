import expect from 'expect'
import reducer from '../../scripts/reducers/portfolio-reducers'
import * as actions from '../../scripts/actions/portfolio-actions'

describe('Portfolio reducer', () => {
  it('update status during data fetch', () => {
    expect(
      reducer([], {
        type: actions.REQUEST_PORTFOLIO
      })
    ).toEqual(
      {
        isFetching: true,
        ready: false,
        items: []
      }
    )
  })

  const portfolioFeed = () => {
    return jsonp('https://spreadsheets.google.com/feeds/list/1LNTNp3n_DYYq_dDLf7YdZyJWjI0soMn3MjYPeVLFSfk/1/public/values?alt=json-in-script')
     .then(resp => (resp.feed.entry))
  };

  it('update state with data feed from Google sheets', () => {
    expect(
      reducer([], {
        type: actions.RECEIVE_PORTFOLIO,
        items: portfolioFeed
      })
    ).toEqual(
      {
        isFetching: false,
        ready: true,
        items: portfolioFeed
      }
    )
  })
})
