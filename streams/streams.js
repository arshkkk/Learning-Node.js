//http net fs
// all provides streams to work with
const fs = require('fs');
const http = require('http');

//Serving Files without Stream can cause infinte loading
// const server = http.createServer(
//     (request,result)=>{
//         fs.readFile('./sample.html',(err, data)=>{
//             if(err) {
//                 console.log('error occured');
//                 return;
//             }
//             result.end(data);
//         });
//     }
//     );

//SErving File with Stream of Data
const server = http.createServer(
    (request,result)=>{
       const file= fs.createReadStream('./sample.html');
     
       //Connecting result and file stream 
       file.pipe(result);
   }
    );

    server.listen(8000);