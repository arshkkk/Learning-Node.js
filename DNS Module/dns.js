const dns = require('dns');

//To get IP using domain name
//Checks Locally
dns.lookup('google.com', (err, value)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('locally'+value);
});

//To get Domain name using IP
dns.lookupService('172.217.166.238', 8080, (err,hostname,service)=>{
    if(err){
        console.log("Error Happened"); 
        return;
    }
    console.log('locally '+hostname+" "+ service);
});

//To get IP using domain name
//Make a request to dns and return all IP's
dns.resolve('google.com', (err, value)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(value);
});

dns.reverse('8.8.8.8',(err,hostnames)=>{
    if(err){
        console.log('Error happened');
        return;
    }
    console.log(hostnames);
});
