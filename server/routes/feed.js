import fs from 'fs';
import path from 'path';
import express from 'express';
import fetch from 'fetch'
import bodyParser from 'body-parser';
const router = express.Router();

router.use(bodyParser.json());

router.get('/blog', function(req, res){
  res.setHeader('Content-Type', 'application/json');
  const blogFeed = JSON.parse(fs.readFileSync(path.join( __dirname, '../data/blogfeed.json')).toString());
  res.send(blogFeed);

  //   return jsonp('https://api.tumblr.com/v2/blog/blog.hoonio.com/posts/photo?api_key=o5UJwOYSdRtRCzAwTRfkHVuwUWmTKvmzevn31oTaZ854hHU2r6')

})

module.exports = router;
