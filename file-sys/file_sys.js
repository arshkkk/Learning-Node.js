const fs = require('fs');


//Reading contents of File Sync Method
const data = fs.readFileSync('os.js'); //returns buffer
console.log(data.toString());

//Writing File
fs.writeFileSync('data.txt', data.toString);

//Append File
fs.appendFileSync('data.txt', 'By Arshdeep');

//Copy File Source ---> Target
fs.copyFileSync('data.txt', 'data.bak.txt')

//Renaming File
fs.renameSync('data.bak.txt', 'data.new.txt');

//Deleting Files
fs.unlinkSync('data.txt');

// Reading contents of Directory
// Returns array of file names 
const dir = fs.readdirSync(__dirname);
console.log(dir);

// Creating New Dir
fs.mkdirSync('file--sys');

// Moving file to Directory
fs.renameSync('data.txt', './data.txt');

//Watching File for Changes
fs.writeFileSync('data.txt', 'Arsh');
fs.watchFile('data.txt',()=>{
    console.log('Data file is changed'); 
});