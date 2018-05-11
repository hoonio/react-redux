import expect from 'expect';
import * as actions from '../../scripts/actions/portfolio-actions';
import * as types from '../../scripts/actions/actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Portfolio actions', () => {
  it('fetch portfolio items from Google sheets', () => {
    console.log(actions.getPortfolioIfNeeded())
    expect(actions.getPortfolioIfNeeded()).toEqual(23)
  })
})

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create RECEIVE_PORTFOLIO when loading portfolio', (done) => {
    // Here's an example call to nock.
    nock('https://spreadsheets.google.com/feeds/list/1LNTNp3n_DYYq_dDLf7YdZyJWjI0soMn3MjYPeVLFSfk/1/public/values?alt=json-in-script')
      .get('/courses')
      .reply(200, { body: { feed: [{"id":{"$t":"https://spreadsheets.google.com/feeds/list/1LNTNp3n_DYYq_dDLf7YdZyJWjI0soMn3MjYPeVLFSfk/1/public/values/cpzh4"},"updated":{"$t":"2016-05-29T02:15:45.299Z"},"category":[{"scheme":"http://schemas.google.com/spreadsheets/2006","term":"http://schemas.google.com/spreadsheets/2006#list"}],"title":{"type":"text","$t":"2"},"content":{"type":"text","$t":"title: Hoonio.com, client: Hoonio, description: This site has recently been redesigned from ground up to utilize all the cutting edge technology of the modern times. Created with React.js, together with Node.js/Express, Redux, Bootstrap 4, written in ES6 syntax, compiled on Babel and deployed to Azure apps with gulp scripts, period: 2016, link: https://www.hoonio.com, shortlink: /, image: https://lh3.googleusercontent.com/-8Z3yuTBwxPM/VujUgRbZ_BI/AAAAAAACxo0/MvOyeMohYAwvJt08bD3s-yncLO82k2DAwCCo/w386-h240-Ic42/Screen%2BShot%2B2016-03-16%2Bat%2B03.34.08.png, imagealt: Hoonio.com, sourcecode: https://github.com/hoonio/root, stacks: React.js, Redux, ES6, Node.js, Express, Bootstrap, Babel, Gulp, Azure, portfolio: TRUE, asset: TRUE"},"link":[{"rel":"self","type":"application/atom+xml","href":"https://spreadsheets.google.com/feeds/list/1LNTNp3n_DYYq_dDLf7YdZyJWjI0soMn3MjYPeVLFSfk/1/public/values/cpzh4"}],"gsx$sequence":{"$t":"2"},"gsx$title":{"$t":"Hoonio.com"},"gsx$client":{"$t":"Hoonio"},"gsx$description":{"$t":"This site has recently been redesigned from ground up to utilize all the cutting edge technology of the modern times. Created with React.js, together with Node.js/Express, Redux, Bootstrap 4, written in ES6 syntax, compiled on Babel and deployed to Azure apps with gulp scripts"},"gsx$period":{"$t":"2016"},"gsx$link":{"$t":"https://www.hoonio.com"},"gsx$shortlink":{"$t":"/"},"gsx$image":{"$t":"https://lh3.googleusercontent.com/-8Z3yuTBwxPM/VujUgRbZ_BI/AAAAAAACxo0/MvOyeMohYAwvJt08bD3s-yncLO82k2DAwCCo/w386-h240-Ic42/Screen%2BShot%2B2016-03-16%2Bat%2B03.34.08.png"},"gsx$imagealt":{"$t":"Hoonio.com"},"gsx$sourcecode":{"$t":"https://github.com/hoonio/root"},"gsx$stacks":{"$t":"React.js, Redux, ES6, Node.js, Express, Bootstrap, Babel, Gulp, Azure"},"gsx$portfolio":{"$t":"TRUE"},"gsx$asset":{"$t":"TRUE"}}] }});

    const expectedActions = [
      {type: types.REQUEST_PORTFOLIO},
      {type: types.RECEIVE_PORTFOLIO, body: {items: [{id: 'clean-code', title: 'Clean Code'}]}}
    ];

    const store = mockStore({items: []}, expectedActions, done);
    store.dispatch(actions.requestPortfolio()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.REQUEST_PORTFOLIO);
      expect(actions[1].type).toEqual(types.RECEIVE_PORTFOLIO);
      done();
    });
  });
});
