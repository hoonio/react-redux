import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import brainwave from './routes/brainwave';

/* eslint-disable no-console */

const port = process.env.PORT || 8080;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(function(req, res, next) {
  console.log(req.method, 'at', req.path);
  next();
})

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
  next();
})

app.use('/brainwave(/*)', brainwave);

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
  console.log('redirecting to blog')
  res.redirect('http://blog.hoonio.com')
})

app.get('/wiki/CFA', function(req, res){
  res.redirect('http://wiki.hoonio.com/sciences/cfa')
})

app.get('/wiki(/*)?', function(req, res){
  console.log('redirecting to wiki')
  res.redirect('http://wiki.hoonio.com')
})

app.get('*', function(req, res) {
  const indexPath = process.env.NODE_ENV === 'develop' ? '../app/index.html' : '../dist/index.html';
  res.sendFile(path.join( __dirname, indexPath));
});

// app.set('port', port);
// app.use(express.static('app'));

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    // open(`http://localhost:${port}`);
    console.info('Listening on port ', port);
  }
});
