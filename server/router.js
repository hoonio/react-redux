import express from 'express';
import path from 'path';
const router = express.Router();
const brainwave = require('./brainwave');

router.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-UserToken, Authorization');
  response.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  next();
});

// router.use(bodyParser.json());

router.get('/express', function(req, res) {
  res.send('Hello from express')
})

// to prevent embedded maps in news articles from disappearing
router.get('/helpage(.html)?', function(req, res) {
  res.sendFile(path.join( __dirname, '../app/helpage.html'));
})

router.get('/error/:reqpage', function(req, res){
  res.status(404).send('No page named' + req.params.reqpage + ' found')
})

router.get('/blog/*', function(req, res){
  res.redirect('http://blog.hoonio.com')
})

router.get('/wiki/CFA', function(req, res){
  res.redirect('http://wiki.hoonio.com/sciences/cfa')
})

router.get('/wiki(/*)?', function(req, res){
  res.redirect('http://wiki.hoonio.com')
})

router.use('/brainwave(/*)', brainwave);

router.get('*', function(req, res) {
  console.log(req.path);
  const indexPath = process.env.NODE_ENV === 'develop' ? '../app/index.html' : '../dist/index.html';
  res.sendFile(path.join( __dirname, indexPath));
});

module.exports = router;
