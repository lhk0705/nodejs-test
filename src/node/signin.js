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
});
app.post('/checkUser',(req,res)=>{
    var b=[]
    for(let a of resps){
        if(a.Email===req.body.inputEmail&&a.Password===req.body.inputPassword)
        {   
            b.push("1")
            
        }else{
            
        }
        res.send(b);
        res.end()
    }
    
    }
);
app.listen(8088)