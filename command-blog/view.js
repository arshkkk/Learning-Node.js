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



 
    db.serialize(()=>{
        const stmt = `SELECT * FROM ${config.tableName}`;
        db.each(stmt,(err,row)=>{
            if(err){
                message.error('error while reading db');
                return;
            }

            const { title, author, date, post} = row;
            console.log('-'.repeat(20));
            console.log('-'.repeat(10));
            console.log(chalk.green(title));
            console.log(chalk.green('Author: '+author));
            console.log('-'.repeat(10));
            console.log(date);
            console.log('-'.repeat(5));
            console.log('\n');
            console.log(post);
            console.log('\n');
            console.log('-'.repeat(20));








        });
    });
    db.close();