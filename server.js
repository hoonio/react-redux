var express = require('express')
  , fs      = require('fs')
var app = express()
app.set('port', process.env.PORT || 9001)
app.use(express.static('dist'))

app.get('/', function(req, res) {
  res.send('Hello from express')
})

app.get('/react', function(req, res){
  var page = fs.readFileSync('dist/index.html').toString()
  res.send(page)
})

// to prevent embedded maps in news articles from disappearing
app.get('/helpage(.html)?', function(request, response) {
  var data = fs.readFileSync('dist/helpage.html').toString();
  response.send(data);
});

app.get('/*', function(request, response) {
  response.redirect('/');
});

var server = app.listen(app.get('port'), function() {
  console.log('Express server running at http://localhost:'+ app.get('port'))
})
