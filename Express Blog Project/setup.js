const sqlite3 = require('sqlite3').verbose();

const message = require('./util/messages'); //Coloured Message
const config = require('./config');

//Setting up database connection
const db = new sqlite3.Database(config.databaseName);

db.serialize(()=>{
    const stmt = `CREATE TABLE ${config.tableName}(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, 
        author TEXT, date TEXT, post TEXT
        )`;

        db.run(stmt,(err)=>{
            if(err){
                message.error('Error while creating DB');
                console.log(err);
                return;
            }
            message.success('DB created successfully');
        });

        db.close();
});