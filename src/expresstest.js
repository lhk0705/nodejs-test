var express=require('express');
var app=express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/addScore', urlencodedParser, function(req,res){
    var response = {
        "first_name":req.body,
        "last_name":req.body
    };
    console.log(response);
    res.end(JSON.stringify(response));
})
app.listen(8088);
