const events = require('events');
const fs = require('fs');


const eventEmitter = new events.EventEmitter();

eventEmitter.on('userLoggedIn', ()=>{

    let userLoggedIn = fs.readFileSync('data.txt');
    userLoggedIn = parseInt(userLoggedIn);
    userLoggedIn++; 
    fs.writeFileSync('data.txt', userLoggedIn);
    console.log('No of Users '+ userLoggedIn);
});

eventEmitter.emit('userLoggedIn');

