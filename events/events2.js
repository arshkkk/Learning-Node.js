const fs = require('fs');

// const watcher = fs.watch('events2.js');

fs.watch('events2.js',()=>{
    console.log('file has changed');
}); 


//Important Difference
// fs.watch -->
//This watches on file as well as directories

//fs.watchFile -->
//This watches on single file only