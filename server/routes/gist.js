module.exports = (req, res) => (
  fetch(process.env.GIST_HOME)
    .then(r => r.json())
    .then(data => res.send(data))
    .catch(err => console.log(err))
)
