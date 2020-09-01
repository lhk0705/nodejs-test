var http = require('http');
var url=require('url')

var server = http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain;charset=UTF-8'});
    var params=url.parse(req.url,true).query;
    res.write(params.name)
    res.end(params.url)

});
server.listen(8088);