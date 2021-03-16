var express = require('express');
var router = express.Router();

var sendHtmlFile = function(req, res, next) {
  res.sendFile('buy.html', { root: "./public/"});
}

var logBuy1 = function(req, res, next) {
  console.log("bought 1") 
  next()
}


var logBuy2 = function(req, res, next) {
  console.log("bought 2") 
  next()
}


router.get('/1', [logBuy1, sendHtmlFile] );
router.get('/2', [logBuy2, sendHtmlFile] );

module.exports = router;
