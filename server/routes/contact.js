var querystring = require('querystring');

module.exports = async (req, res) => {
  return fetch('https://docs.google.com/forms/d/e/1FAIpQLSdS_X4maRW2sNw1GPyOMZJGjLCi_FvCyGXamuHp1OOvArztGA/formResponse', {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      'entry.1000001': req.body.name,
      'entry.1000002': req.body.email,
      'entry.1000003': req.body.message,
    }),
  })
  .then(resp => {
    console.log(resp)
    return resp.data()
  })
  .then(data => {
    console.log(data)
    return res.send(data)
  })
  .catch(err => console.log(err))
}
