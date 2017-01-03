import express from 'express';
import compression from 'compression';

/*eslint-disable no-console */

const port = 8080;
const app = express();
const router = require('./server/router');

app.use(compression());
app.use(express.static('dist'));

app.use('*', router);

app.listen(port, (err) => console.log(err ? err: 'Starting Express server') );
