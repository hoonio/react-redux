import 'babel-polyfill'

import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { routerReducer, routerMiddleware, syncHistoryWithStore } from 'react-router-redux'

import { getBlog } from './actions'
import * as reducers from './reducers'
import routes from './routes'

const store = createStore(
    combineReducers({
      ...reducers,
      routing: routerReducer
    }),
    compose(
      applyMiddleware(
        thunkMiddleware, // enables dispatch() calls
        routerMiddleware(history) // logs actions
      )
    )
)

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
)
