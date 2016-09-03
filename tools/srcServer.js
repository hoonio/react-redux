import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import fs from 'fs';

/* eslint-disable no-console */

const port = 8080;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

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
  res.sendFile(path.join( __dirname, '../app/helpage.html'));
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

app.get('/brainwave', function(req, res){
  // Available symbols are: AIG, CPA, DST, ELRC, EXAM
  var listStocks = getStocks(JSON.parse(data))
  res.setHeader('Content-Type', 'application/json')
  res.jsonp(listStocks)
})

app.get('/brainwave/:symbol', function(req, res){
  res.setHeader('Content-Type', 'application/json')
  res.jsonp(JSON.parse(data)['WIKI/'+req.params.symbol].data)
})

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../app/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});

const data = fs.readFileSync(path.join( __dirname, '../app/files/brainwave.json')).toString();

const getStocks = function(data){
  var stockSymbols = [];
  for (var key in data){
    if (data.hasOwnProperty(key)) {
      stockSymbols.push(key)
    }
  }
  return stockSymbols;
}
