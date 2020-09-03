var express=require('express');
var app=express();
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json())
app.post('/addScore',function(req,res){
    var response = {
        "first_name":req.body.first_name,
        "last_name":req.body.last_name
    };
    console.log(response);  
    res.send(JSON.stringify(response)) ;
    res.end();
})
app.listen(8088);
exports.response=this.response