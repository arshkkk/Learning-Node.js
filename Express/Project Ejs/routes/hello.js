var express = require('express');
var router = express.Router();

/* GET home page. */

//When using postman 
// Always choose json for post request
// And all structure and data all should be enclosed in double quotes-->> " "
router.post('/hash',(req,res,next)=>{
    let { text, text1,text2} = req.body;
    res.json({text: text,text1:text,text2:text2});
});

router.get('/time',(req,res,next)=>{
        res.json({
            date:new Date().toString()
        });
});


//Url Parameter 
// /:nameOfParameter
//Usage ---
// req.params.nameOfParameter
router.get('/:temp/:temp1', function(req, res, next) {

    //Usage of params
    //Avoid usage of param instead params
    let temp = req.params.temp;
    let temp1 = req.params.temp1;

    //url/?name=arsh&class=adj
    let name = req.query.name;
    console.log(`${temp} ${temp1}`);

  res.render('hello', { name: name,layout:false, });
});

module.exports = router;
