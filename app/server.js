var express = require('express')
  , fs      = require('fs')
  , path    = require('path')
  , compression = require('compression')
  , serveStatic = require('serve-static')

import React from 'react'
import { renderToString } from 'react-dom/server'
import { createMemoryHistory, match, RouterContext } from 'react-router'
import { Provider } from 'react-redux'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'

import { configureStore } from './scripts/stores'
import routes from './scripts/routes'

var app = express()
app.set('port', process.env.PORT || 9001)
var publicPath = (process.env.NODE_ENV === 'production') ? './public' : './dist/public';

function setCacheControl(res, path) {
  res.setHeader('Cache-Control', 'public, max-age=29030400')
}

app.use(serveStatic(publicPath, { maxAge: '1w', setHeaders: setCacheControl }))
app.use('/.well-known', serveStatic('.well-known'))
app.use(compression());

app.use(function(req, res, next) {
  console.log(req.method, 'at', req.path)
  next()
})

app.use(function(err, req, res, next){
  console.error(err.stack)
  res.status(500).send('Something went wrong!')
})

app.get('/express', function(req, res) {
  res.send('Hello from express')
})

// to prevent embedded maps in news articles from disappearing
app.get('/helpage(.html)?', function(req, res) {
  var data = fs.readFileSync(publicPath + '/helpage.html').toString()
  res.send(data)
})

app.get('/error/:reqpage', function(req, res){
  res.status(404).send('No page named' + req.params.reqpage + ' found')
})

app.get('/blog/*', function(req, res){
  res.redirect('http://blog.hoonio.com')
})

app.get('/wiki/CFA', function(req, res){
  res.redirect('http://wiki.hoonio.com/sciences/cfa')
})

app.get('/wiki(/*)?', function(req, res){
  res.redirect('http://wiki.hoonio.com')
})

app.get('/.well-known/acme-challenge/:fileid', function(req, res){
  res.send('Requesting '+fileid)
})

app.get('/brainwave', function(req, res){
  // Available symbols are: AIG, CPA, DST, ELRC, EXAM
  var data = fs.readFileSync(publicPath + '/brainwave.json').toString()
  var listStocks = getStocks(JSON.parse(data))
  res.setHeader('Content-Type', 'application/json')
  res.jsonp(listStocks)
})

app.get('/brainwave/:symbol', function(req, res){
  var data = fs.readFileSync(publicPath + '/brainwave.json').toString()
  res.setHeader('Content-Type', 'application/json')
  res.jsonp(JSON.parse(data)['WIKI/'+req.params.symbol].data)
})

app.get('/*', function(req, res){

  const memoryHistory = createMemoryHistory(req.path)
  let store = configureStore(memoryHistory)
  const history = syncHistoryWithStore(memoryHistory, store)

  match({ history, routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirect) {
      res.redirect(302, redirect.pathname + redirect.search)
    } else if (props) {
      fetchData().then( () => {
        store = createStore(memoryHistory, store.getState() )
        const appHtml = renderToString(
          <Provider store={store}>
            <RouterContext {...props}/>
          </Provider>
        )
        // res.send(renderFullPage(appHtml, initialState))
        res.send('<!doctype html>\n' + renderToString(<HTML content={appHtml} store={store}/>))
      })

      /* fetch data promise */
      function fetchData () {
        console.log('fetch data')
        console.log(props.components)
        let { query, params } = props;
        return new Promise(function(resolve, reject) {
          let comp = props.components[props.components.length - 1].WrappedComponent;
          let url = req.protocol + '://' + req.get('host')
          resolve(comp.fetchData({ params, store, url }));
        });
      }
    }

    // res.render('./index.ejs',{ reactOutput:appHtml })

  })
})

const HTML = ({ content, store }) => (
  <html>
    <head>
      <link rel='stylesheet' type='text/css' href='/public/main.css' />
    </head>
    <body>
      <div id='mount' dangerouslySetInnerHTML={{ __html: content }}/>
      <script dangerouslySetInnerHTML={{ __html: `window.__initialState__=${serialize(store.getState())};` }}/>
      <script src='/public/vendor.js' />
      <script src='/public/app.js' />
    </body>
  </html>
)

function renderFullPage(html, initialState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

var getStocks = function(data){
  var stockSymbols = []
  for (var key in data){
    if (data.hasOwnProperty(key)) {
      stockSymbols.push(key)
    }
  }
  return stockSymbols
}

var server = app.listen(app.get('port'), function() {
  console.log('Express server running at http://localhost:'+ server.address().port)
})

module.exports = app;
