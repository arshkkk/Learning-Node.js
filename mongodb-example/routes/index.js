var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const collection = req.app.locals.collection;
  collection.find({}).toArray().then(response=>res.json(response));
  // res.render('index', { title: 'Express' });
});

module.exports = router;
