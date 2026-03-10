const express=require("express");
const app=express();    
const feedRoutes=require("./Routes/feed");

app.use(express.json());

//to handle the cors error while working on the different server we use following code to allow brower 

app.use((req,res,next)=>
{
    res.setHeader('Access-Control-Allow-Origin','*'); //here we use * to allow all otherwise use can use specific domain also
    res.setHeader('Access-Control-Allow-Methods','GET','PUT','PATCH','DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-type,Authorization');
    next();
})


app.use("/feed",feedRoutes);
app.listen(8080, ()=>
{
    console.log("Server running on port 8080");
})