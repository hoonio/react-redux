import express from 'express';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */

const port = 8080;
const app = express();
const compiler = webpack(config);
const router = require('./router');

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

app.use('*', router);

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
    console.info('Listening on port ', port);
  }
});
