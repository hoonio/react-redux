var querystring = require('querystring');

module.exports = async (req, res) => {
  return fetch(process.env.CONTACT_FORM, {
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
    const {status, statusText, ok} = resp
    return res.status(status).send({
      statusText,
      ok
    })
  })
}
