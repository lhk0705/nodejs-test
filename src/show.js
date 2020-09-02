var http=require('http');
var et=require('express');

http.createServer(function (req,res) {
    res.writeHead(200,{'content-type':'text/plain'});
    res.write(et.response);
    res.write('fafa')
    res.end()
}).listen(3000)