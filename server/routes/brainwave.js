import fs from 'fs';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
const router = express.Router();

router.use(bodyParser.json());

router.get('/:symbol', function(req, res){
  console.log(req.params.symbol);
  res.setHeader('Content-Type', 'application/json')
  res.jsonp(JSON.parse(data)['WIKI/'+req.params.symbol].data)
})

router.get('*', function(req, res){
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
