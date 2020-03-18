var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=> {
  res.render('hbsexample', { title: 'Express hbs',layout:false });
});

router.get('/hbs', (req,res,next)=>{
    let obj ={
      titleWithHtml: '<h1>Main Title</h1>',
      showTitle: true,
      data: ['arsh','deepu', 'daddy', 'mummy'],
  
    };
    res.render('hbs-example2',obj);
  });
module.exports = router;
