var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

/* GET home page. */
//For finding all documents with specified properties in passed json
router.get('/', function(req, res, next) {
  const collection = req.app.locals.collection;
  collection.find({}).toArray().then(response=>res.json(response));
  // res.render('index', { title: 'Express' });
});

//Inserting Data to MongoDB
router.post('/', (req,res,next)=>{
  const collection = req.app.locals.collection;
  const document = req.body;
  
  collection.insert(document).then(data => res.json(data));
  // res.redirect('/');
});

//Finding Data using Id
router.get('/:id', (req,res,next)=>{
  const collection = req.app.locals.collection;
  const id = ObjectID(req.params.id);
  
  collection.findOne({_id:id}).
  then(data => res.json(data));

});

//Updating
router.patch('/:id/name',(req,res,next)=>{
  const collection = req.app.locals.collection;
  const id = ObjectID(req.params.id);
  const newname = req.body.newname;
  console.log(newname);
  
  collection.updateOne({_id:id},{$set:{
      author:newname
  }}).
  then(data => res.json(data));
});

//Replacing Whole document
router.put('/:id',(req,res,next)=>{
  const collection = req.app.locals.collection;
  const id = ObjectID(req.params.id);
  const document = req.body;
  
  collection.replaceOne({_id:id},document).
  then(data => res.json(data));
});

//Deleting a document
router.delete('/:id',(req,res,next)=>{
  const collection = req.app.locals.collection;
  const id = ObjectID(req.params.id);
  const document = req.body;
  
  //Use remove for removing all documents with specified property
  //collection.remove({})
  collection.deleteOne({_id:id}).
  then(data => res.json(data));
});

module.exports = router;
