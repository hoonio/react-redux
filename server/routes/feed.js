module.exports = (req, res) => (
  fetch(`https://api.tumblr.com/v2/blog/blog.hoonio.com/posts/photo?api_key=${process.env.TUMBLR_API_KEY}`)
    .then( r => r.json() )
    .then( data => res.send(data))
    .catch(err => console.log(err))
)
