var express = require('express');
var router = express.Router();

//http://localhost:3000/contact
router.get('', function(req, res, next) {
  res.sendFile('contact.html', { root: "./public/"});
});

//matches -- http://localhost:3000/contact/vlad.edna@gmail.com
router.get('/:email', function (req, res, next) {
  console.log("--------------------- REQUEST PARAMETERS --------------")
  console.log(req.params) 
  console.log("----------------------- REQUEST PARAMETERS --------------")  
  res.sendFile('contact.html', { root: "./public/"});
})

module.exports = router;
