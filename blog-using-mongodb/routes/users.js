var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/login',(req,res,next)=>{
  const errors = req.flash().error || [];
  res.render('login',{errors});
});

router.post('/login', passport.authenticate('local',{
failureFlash:true,
failureRedirect:'/register',
}),(req,res,next)=>{
  res.redirect('/create-post');
});

router.get('/register',(req,res,next)=>{
  const flash = req.flash();
  const error = flash.error || [];
  const success = flash.success || [];

  res.render('register',{error,success});

});

router.post('/register',(req,res,next)=>{
  const users = req.app.locals.users;

  users
  .insertOne(req.body)
  .then(()=>{
      req.flash('success', 'user registered successfully');
      res.redirect('/register');
  })
  .catch(()=>{
    req.flash('error','error registering user');
    res.redirect('/register');
  });
});

module.exports = router;
