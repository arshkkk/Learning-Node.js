const config= require('./config');
const chalk = require('chalk');
const sqlite3 = require('sqlite3').verbose();
const inquirer = require('inquirer');
const message = require('./messages');

//Setting up connection with database
const db = new sqlite3.Database(config.dbName, (err)=>{
    if(err){
        message.error('Error connecting to Db');
        return;
    }
    message.success('db connected');
    
});

inquirer.prompt([
    {
        name : 'title',
        message: 'Post Title: ',
    },

    {
        name : 'author',
        message: 'Author: ',
    },

    {
        name : 'date',
        message: 'Date: ',
        default: new Date().toString(),
    },

    {
        name : 'content',
        message: 'Post Content: ',
    }


])
.then(answers =>{
    //Answer is a Object
    const {title, author, date, content}=answers;

    const stmt = `INSERT INTO ${config.tableName}(title, author,date, post) VALUES('${title}','${author}', '${date}', '${content}' )`;

 
    db.serialize(()=>{
        db.run(stmt,(err)=>{


            if(err){
                message.error('Error has occured');
                console.log(err);
                return;
            }
            
            message.success('Post has been saved');

        });
    });

    db.close();
});