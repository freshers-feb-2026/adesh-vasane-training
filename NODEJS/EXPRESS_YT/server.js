const express=require("express");
const path=require("path");
const app=express();
const port=process.env.PORT || 8000;
//setup a static server with node js we are directly access HTML from here
 
app.use(express.static(path.join(__dirname,'Public')));

app.get('/',(req,res)=>
{ 
   res.send({title:"Hello"})
})

app.get('/api/post/:id',(req,res)=>
{
    console.log(req.params.id);
   res.send(req.params.id);
})
app.listen(3000,()=>
{   
    console.log(`Server Running on port ${port}`);
})
