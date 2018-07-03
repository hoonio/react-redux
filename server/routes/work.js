module.exports = (req, res) => (
  fetch(process.env.PORTFOLIO_LIST)
    .then( r => r.json() )
    .then( data => res.send(data.feed.entry))
    .catch(err => console.log(err))
)
