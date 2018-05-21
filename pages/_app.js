import React from 'react'
import App, {Container} from 'next/app'
// import {createStore} from 'redux'
// import {Provider} from 'react-redux'
// import withRedux from 'next-redux-wrapper'

import Layout from '../components/layout'
// import actions from '../components/actions'
// import reducer from '../components/reducers'

// let devtools = f => f
// if (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__) {
//   devtools = window.__REDUX_DEVTOOLS_EXTENSION__()
// }

// const makeStore = (initialState, options) => createStore(reducer, initialState, devtools)



export default class Root extends App {
  static async getInitialProps({Component, ctx}) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return {pageProps};
  }

  render() {
    const {Component, pageProps} = this.props
    return (
      <Container>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </Container>
    )
  }
}

// export default withRedux(makeStore)(Merx)
