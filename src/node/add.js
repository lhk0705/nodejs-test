var express=require('express');
var connection=require('../sql/mysql');
var sql=require('../sql/sql');
var app=express();
var cors=require('cors');
var bp=require('body-parser')
app.use(bp.json())
app.use(cors())
//进行链接
connection.connect();

app.post('/addUser',(req,res)=>{
    var user=[req.body.userId,req.body.email,req.body.password]
    connection.query(sql.insert,user);
})
app.post('/checkUser',(req,res)=>{
    connection.query(sql.queryById,req.body.userId,(err,result)=>{
        if(err){
            console.log(err);
        }
        console.log(result);
        res.send(result)
    })
})
app.listen(8088)