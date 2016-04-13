import { browserHistory } from 'react-router'
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import { routerReducer, routerMiddleware, syncHistoryWithStore } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import blog from './reducers/blog-reducers'
import portfolio from './reducers/portfolio-reducers'
import canvas from './reducers/canvas-reducers'

export const store = createStore(
    combineReducers({
      blog,
      portfolio,
      canvas,
      routing: routerReducer
    }),
    compose(
      applyMiddleware(
        thunkMiddleware, // enables dispatch() calls
        routerMiddleware(history) // logs actions
      )
    )
)

export const history = syncHistoryWithStore(browserHistory, store)
