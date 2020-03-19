var express = require('express');
const sqlite3 = require('sqlite3').verbose();

const message = require('../util/messages');
const config = require('../config');

const db = new sqlite3.Database(config.databaseName);

var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Express Blog Application',submitted:req.query.submitted });
});

router.get('/blog/:postNumber',(req,res,next)=>{

  db.serialize(()=>{
    const postNumber = req.params.postNumber;
    const stmt = `SELECT title,author,date,post FROM ${config.tableName} WHERE id=${postNumber}`;
    db.each(stmt,(err,row)=>{

      res.render('viewpost', {data: [row]});

    });
  });

});
router.get('/view-post', (req,res,next)=>{

  db.serialize(()=>{
    const stmt = `SELECT title,author,date,post FROM ${config.tableName}`;
    db.all(stmt,(err,row)=>{

      res.render('viewpost', {data: row});
    });
  });

});

//For processing Add post data and injecting to sql
router.post('/add',(req,res,next)=>{

  db.serialize(()=>{
    const {title, author, post}=req.body;

    const date = new Date().toTimeString();
    
    const stmt = `INSERT INTO ${config.tableName}(title,author,date,post)
    VALUES('${title}','${author}', '${date}','${post}')
    `;

    db.run(stmt,(err)=>{
      if(err){
        message.error('error while adding post');
        console.log(err);
        return;
      }
      message.success('post saved successfully');
      res.redirect('/?submitted=true');
    });
    
  });


});

router.get('/add-post',(req,res,next)=>{
res.render('addpost');
});

router.get('/',(req,res,next)=>{

});




module.exports = router;
