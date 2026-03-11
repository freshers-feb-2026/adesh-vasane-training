const express = require("express");
const router = express.Router();
const path=require('path')
const rootDir=require('../Utils/path')



router.get('/add-products',(req,res,next)=>{
//  1st way  res.sendFile(path.join(__dirname,'../','Views','admin.html'));
 // 2nd way by creating utils files
   
  res.sendFile(path.join(rootDir,'Views','admin.html'));

});



//module.exports = router;  this is only use when we only have to exprort one thinh

module.exports = router;