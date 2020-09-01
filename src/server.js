var http = require('http');
var url=require('url')

var server = http.createServer(function(req,res){
    res.headwrite(200,{'content-type':'text/plain'});
    var params=url.parse(req.url,true).query;
    res.end(param.name+params.url)

});
server.listen(8088);