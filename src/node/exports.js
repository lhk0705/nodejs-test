var http=require('http');

function service(req,res){
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('this is service');
}
function sayHello(){
    console.log('this is sayHello');
}

exports.sayHello=sayHello;
exports.service=service;