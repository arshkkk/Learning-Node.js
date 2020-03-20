var express = require('express');
var router = express.Router();
const ObjectID = require('mongodb').ObjectID;
const passport = require('passport');


const ensureAuthenticated = (req,res,next)=>{
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
};

router.get('/create-post',(req,res,next)=>{
  const errors = req.flash().error || [];
  const success = req.flash().success || [];

  if(!req.isAuthenticated()) res.redirect('/login');
  else
  res.render('create-post',{errors, success});

});

router.post('/create-post',(req,res,next)=>{

    if(!req.isAuthenticated())  res.redirect('/login');

    else{

    const {title,content} = req.body;
    let username;

     if(true){
        req.app.locals.users
        .findOne({_id: req.user.id})
        .then(user=>{
            req.session.username = user.username;
            // console.log(req.user.id);
            console.log(user);
        });
    }
    
   

    // console.log(req);
    // console.log(req.session);

    // console.log(username);
    // console.log(req.body);

    const posts = req.app.locals.posts;
    const date = new Date().toISOString();
    
    posts
    .insertOne({title,content,date,author:username})
    .then(()=>{
        req.flash('success', 'Post created successfully');
        res.redirect('/create-post');
    })
    .catch(()=>{
        //Do not use redirect function in catch if will cause UnhandeledPromiseWarning
        req.flash('error','Post could not be saved');
    });
    res.redirect('/create-post');
    }
});

router.get('/posts',(req,res,next)=>{
  const posts = req.app.locals.posts;

  posts
  .find({})
  .toArray()
  .then(posts=>res.render('post',{posts}));


});

router.get('/post/:id',(req,res,next)=>{
    const posts = req.app.locals.posts;
    const id = ObjectID(req.params.id);

    posts
    .findOne({_id: id})
    .then(post=>res.render('post',{posts:[post]}));
  
      
  });




module.exports = router;
