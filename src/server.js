var http = require('http');
var exports = require('./exports');
exports.sayHello();
var server = http.createServer(exports.server);
server.listen(8088);