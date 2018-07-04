const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const path = require('path')
const favicon = require('serve-favicon')
const fetch = require('isomorphic-unfetch')

const dev = process.env.NODE_ENV !== 'production'
dev && require('dotenv').config()
const port = process.env.PORT || 8080;
const app = next({ dev })
const handle = app.getRequestHandler()

const { blog, brainwave, contact, gist, portfolio } = require('./routes')

app.prepare().then(() => {
  const server = express()
  server.use(bodyParser.json())

  server.get('/ping', (req, res) => res.send('pong'))
  server.use(favicon(path.join(__dirname, "static", "favicon.ico")))
  server.use('/static', express.static(path.join(__dirname, 'static')))

  server.use('/brainwave', brainwave);
  server.use('/feed', blog);
  server.use('/work', portfolio);
  server.use('/gist', gist);
  server.post('/contact', contact)

  server.get('/helpage(.html)?', (req, res) => res.sendFile(path.join( __dirname, './static/helpage.html')))

  // redirects
  server.get('/blog/*', (req, res) => res.redirect('http://blog.hoonio.com'))
  server.get('/wiki(/*)?', (req, res) => res.redirect('http://wiki.hoonio.com'))
  server.get('/wiki/CFA', (req, res) => res.redirect('http://wiki.hoonio.com/sciences/cfa'))

  server.get('/error/:reqpage', function(req, res){
    res.status(404).send('No page named' + req.params.reqpage + ' found')
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:', port)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
