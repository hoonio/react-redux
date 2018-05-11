import fs from 'fs';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

const router = express.Router();

router.use(bodyParser.json());

router.get('/blog', function(req, res){
  res.setHeader('Content-Type', 'application/json');

  fetch('https://api.tumblr.com/v2/blog/blog.hoonio.com/posts/photo?api_key=o5UJwOYSdRtRCzAwTRfkHVuwUWmTKvmzevn31oTaZ854hHU2r6')
    .then(resp => resp.json())
    .then(json => res.send(json))
    .catch(err => {
      console.log(err);
      res.send(JSON.parse(fs.readFileSync(path.join( __dirname, '../data/blogfeed.json'))));
    });
})

module.exports = router;
