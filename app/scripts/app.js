import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory, useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import { configureStore } from './stores'
import routes from './routes'

let state = window.__INITIAL_STATE__ || undefined
const store = configureStore(browserHistory, state)
const routerHistory = useRouterHistory(createBrowserHistory)()
const history = syncHistoryWithStore(routerHistory, store)

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
)
