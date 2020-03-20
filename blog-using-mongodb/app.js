var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const MongoClient = require('mongodb').MongoClient;
const passport = require('passport');
const localStrategy = require('passport-local');
const flash = require('connect-flash');
const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postRouter = require('./routes/posts');

var app = express();
MongoClient.connect('mongodb://localhost:27017/',(err,client)=>{
  if(err) throw err;
  const db = client.db('blogdb');
  const posts = db.collection('posts');
  const users = db.collection('users');

  app.locals.posts = posts;
  app.locals.users = users;
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());
app.use(session({
  secret: 'secret-key',
  resave:false,
  saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy({
  passReqToCallback:true,
},

(req,username,password,authCheckDone)=>{
  app.locals.users
    .findOne({username})
    .then(user=>{
      if(!user)
        return authCheckDone(null,false,req.flash('error','User not found'));
      if(user.password!=password)
        return authCheckDone(null,false,req.flash('error','wrong pass'));
      return authCheckDone(null,user);
    })
}

));
 
passport.serializeUser((user,done)=>{
  done(null,user._id);
});

passport.deserializeUser((id,done)=>{
  done(null,{id});
});

app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/',postRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
