const express=require("express");
const app=express();
const port=process.env.PORT || 3000;
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

app.get('/',(req,res)=>
{
    res.send("Running on port ");
})

app.listen(port,()=>
{
    console.log(`server running on port ${port}`);
})