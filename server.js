import express from 'express';
import open from 'open';
import compression from 'compression';

/*eslint-disable no-console */

const port = 8080;
const app = express();
const router = require('./server/router');

app.use(compression());
app.use(express.static('dist'));

app.use('*', router);

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
