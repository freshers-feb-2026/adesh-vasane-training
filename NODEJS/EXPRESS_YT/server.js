const express=require("express");
const path=require("path");
const app=express();

//setup a static server with node js
app.use(express.static(path.join(__dirname,'Public')));

app.get('/',(req,res)=>
{ 
   res.send({title:"Hello"})
})

app.listen(3000,()=>
{
    console.log("Server Running on port 3000");
})
