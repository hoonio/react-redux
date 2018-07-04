var querystring = require('querystring');

module.exports = (req, res) => {
  console.log(req.body)

  const dummyData = {
    'entry.1000001': 'Hoonio',
    'entry.1000002': 'inquiry@hoonio.com',
    'entry.1000003': 'Test message from express',
  }
  var formData = querystring.stringify(dummyData);

  // return fetch('https://docs.google.com/forms/d/e/1FAIpQLSdS_X4maRW2sNw1GPyOMZJGjLCi_FvCyGXamuHp1OOvArztGA/formResponse', {
  //   method: 'POST',
  //   headers: {
  //     'content-type': 'application/x-www-form-urlencoded',
  //   },
  //   body: formData,
  // })
  // .then(response => console.log(response))
  // .then(data => {
  //   console.log(data)
  //   return res.send(data)
  // })
  // .catch(err => console.log(err))
  return res.send("resp")
}
