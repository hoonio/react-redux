import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import blog from './reducers/blog-reducers'
import portfolio from './reducers/portfolio-reducers'
import canvas from './reducers/canvas-reducers'

export const configureStore = (history, initialState) => (
  createStore(
    combineReducers({
      blog,
      portfolio,
      canvas,
      routing: routerReducer
    }),
    initialState,
    compose(
      applyMiddleware(
        thunkMiddleware,
        routerMiddleware(history)
      )
    )
  )
)
