const fetch = require('isomorphic-unfetch')

module.exports = (req, res) => {
  console.log('sending request to tumblr')
  return
  fetch(`https://api.tumblr.com/v2/blog/blog.hoonio.com/posts/photo?api_key=${process.env.TUMBLR_API_KEY}`)
    .then( r => {
      console.log(r)
      return r.json()} )
    .then( data => res.send(data))
    .catch(err => {
      console.log(err);
      return res.send(JSON.parse(fs.readFileSync(path.join( __dirname, '../static/blogfeed.json'))));
    })
}
