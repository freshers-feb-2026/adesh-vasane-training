const express=require('express');
const router =express.Router();
const path=require('path');  //node js module
const rootDir=require('../Utils/path')
const adminData=require('./admin');
router.get('/',(req,res)=>{
  //1st way  res.sendFile(path.join(__dirname,'../','Views','shop.html'));
  //2nd way using utils folder
  
   res.sendFile(path.join(rootDir,'Views','shop.html'));

});


module.exports=router;