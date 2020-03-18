var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ejs', (req,res,next)=>{
  let obj ={
    titleWithHtml: '<h1>Main Title</h1>',
    showTitle: true,
    data: ['arsh','deepu', 'daddy', 'mummy'],

  };
  res.render('ejs-example',obj);
});

module.exports = router;
