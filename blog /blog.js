const fs = require('fs');

const http = require('http');

const server = http.createServer(
    (request, result) =>{
    const readStream = fs.createReadStream('blog.txt');
    readStream.pipe(result);
    }
);


server.listen(8000, 'localhost');

//provides interface for reading data from readable stram or cmd
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const file = 'blog.txt';

const author = process.argv[2]||'unknown';
const title = process.argv[3]||'New Blog Post';

r1.question('Enter your Blog Post: ', (postContent)=>{
    const blogEntry = 
    `
    ${'-'.repeat(title.length)}
    ${title}
    ${'-'.repeat(title.length)} 
    By ${author} On ${new Date().toString()}

    ${postContent}
    `;

    r1.close();

    fs.appendFile('blog.txt',blogEntry,(err)=>{
        if(err){
            console.log('Erro while saving Blog');
            return;
        }
        console.log('Blog saved successfully');

    });
});





