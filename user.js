const express=require('express');
const router=express.Router();
var db=require('./db.js');

router.route('/register').post((req,res)=>{
    var name=req.body.name;
    var email=req.body.email;
    var password=req.body.password;

    
    var sqlQuery="INSERT INTO user(name,email,password) VALUES(?,?,?)";

    db.query(sqlQuery,[name,email,password],function(error,data,fields){

        if(error){
            res.send(JSON.stringify({success:false,message:error}));
        }else{
            res.send(JSON.stringify({success:true,message:'register'}));
        }
    });
});

router.route('/login').post((req,res)=>{

    var email=req.body.email;
    var password=req.body.password;

    var sql="SELECT * FROM user WHERE email=? AND password=?";

    db.query(sql,[email,password],function(err,data,fields){
        if(err){
            res.send(JSON.stringify({success:false,message:err}));
        }
        else{
            if(data.length>0){
                res.send(JSON.stringify({success:true,user:data}));
            }
            else{
                res.send(JSON.stringify({success:false,message:'Empty Data'}));
            }
            
        }
    });
});

module.exports = router;