const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    res.send('hello client');
});

app.get('/login',(req, res)=>{
    res.send('hello login');
});

app.get('/register',(req, res)=>{
    res.send('hello register');
});


app.listen(3000, ()=>{
console.log('connection');
});
