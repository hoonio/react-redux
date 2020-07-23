const fs = require('fs')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router();

router.use(bodyParser.json());

router.get('/stock/:symbol', function(req, res){
  console.log(req.params.symbol);
  res.setHeader('Content-Type', 'application/json')
  res.jsonp(JSON.parse(data)['WIKI/'+req.params.symbol].data)
})

router.get('/list', function(req, res){
  // Available symbols are: AIG, CPA, DST, ELRC, EXAM
  var listStocks = getStocks(JSON.parse(data))
  res.setHeader('Content-Type', 'application/json')
  res.jsonp(listStocks)
})

const data = fs.readFileSync(path.join( __dirname, './brainwave.json')).toString();

const getStocks = function(data){
  var stockSymbols = [];
  for (var key in data){
    if (data.hasOwnProperty(key)) {
      stockSymbols.push(key)
    }
  }
  return stockSymbols;
}

module.exports = router;
