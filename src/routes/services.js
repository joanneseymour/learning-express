var express = require('express');
var router = express.Router();

var callbackfunction = function(req, res, next) {
  res.sendFile('services.html', { root: "./public/"});
}

router.get('', callbackfunction);

module.exports = router;
