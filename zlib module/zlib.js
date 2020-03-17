const zlib = require('zlib');

const fs = require('fs');

const gzip = zlib.createGzip();
const unzip = zlib.createGunzip();

// const input = fs.createReadStream('sample.html');
// const output = fs.createWriteStream('sample.html.gz');

// input.pipe(gzip)
// gzip.pipe(output);

const input1 = fs.createReadStream('./sample.html.gz');
const output1 = fs.createWriteStream('./samp.html');

input1.pipe(unzip).pipe(output1);
