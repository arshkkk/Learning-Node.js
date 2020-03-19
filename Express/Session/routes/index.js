var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  if(!req.session.viewCount)
  req.session.viewCount=1;
  else req.session.viewCount +=1;
  
 res.render('index', { title: 'Express', viewCount:req.session.viewCount });
});

module.exports = router;
