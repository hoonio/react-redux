import React from 'react'
import App, {Container} from 'next/app'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import withRedux from 'next-redux-wrapper'

import Layout from '../components/layout'
import '../styles/index.scss'
import actions from '../components/actions'
import reducer from '../components/reducers'

let devtools = f => f
if (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__()
}

const makeStore = (initialState, options) => createStore(reducer, initialState, devtools)

class Root extends App {
  static async getInitialProps({Component, ctx}) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return {pageProps};
  }

  render() {
    const {Component, pageProps, store} = this.props
    return (
      <Container>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(makeStore)(Root)
