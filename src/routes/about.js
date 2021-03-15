var express = require('express');
var router = express.Router();

var sendHtmlFileFinally = function(req, res, next) {
  res.sendFile('about.html', { root: "./public/"});
}

var logHelloFirst = function(req, res, next) {
  console.log("--------------------- logHelloFirst starts --------------")
  console.log("HELLO") 
  console.log("----------------------- logHelloFirst is done --------------")
  next()
}


var logWorldNext = function(req, res, next) {
  console.log("--------------------- logWorldNext starts --------------")
  console.log("WORLD") 
  console.log("----------------------- logWorldNext is done --------------")
  next()
}


router.get('', [logHelloFirst, logWorldNext, sendHtmlFileFinally] );

module.exports = router;
