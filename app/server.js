var express = require('express')
  , fs      = require('fs')
  , http    = require('http')
  , https   = require('https')
  , path    = require('path')
  , compression = require('compression')
  , serveStatic = require('serve-static')

var app = express()
app.set('port', process.env.PORT || 8080)
var publicPath = './dist/public';

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
  var page = fs.readFileSync(publicPath + '/index.html').toString()
  res.send(page)
})

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
