const crypto = require('crypto');
// md5 is proved to be weak 
//needed a fast computer which can 
//generate hashes
const hash = crypto.createHash('md5')
                    .update('password')
                    .digest('hex');
                   
 console.log(hash);

 //used to randomize hash to another level
const secretKey = 'secret key';
const hash1 = crypto.createHash('sha256', secretKey)
                    .update('password')
                    .digest('hex');
console.log(hash1);
