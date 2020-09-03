var express=require('express');
var app=express();
var cors=require('cors');
var bp=require('body-parser')
app.use(bp.json())
app.use(cors())
var resps=[]
app.post('/addUser',(req,res)=>{
    
    var resp={
        "Email":req.body.inputEmail,
        "Password":req.body.inputPassword
    }
    resps.push(resp)
    console.log(resps);
    res.send(JSON.stringify(resps));
    res.end();
}).listen(8088)
