const os = require('os');

console.log(os.userInfo());

console.log(os.platform()); //OS Type 

console.log(os.release());

console.log(os.cpus());


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Directory Name
console.log(__dirname);

//File Name
console.log(__filename);

//To create new Env Variables
export NAME = VALUE  //in CMD
console.log(process.env.NAME);


