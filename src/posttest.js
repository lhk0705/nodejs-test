var http=require('http');
var qs=require('querystring');

var postHTML = 
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';

  http.createServer(function(req,res){
    var post='';
    req.on('data',function(chunk){
        post+=chunk;

    });
    //解析对象里的参数
    req.on('end',function(){
        post=qs.parse(post);
        res.writeHead(200,{'content-type':'text/html; charset=utf8'});
        if(post.name&&post.url){
        
        res.write(post.name+''+post.url);}

        else{
            res.write(postHTML);
        }
        res.end();

    })
  }).listen(8088);