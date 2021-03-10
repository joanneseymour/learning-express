var express = require('express');
var router = express.Router();

/* we are not using a view engine, so we cannot use render
 instead we send the entire html file for this page */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root: "./public/"});
});

module.exports = router;
