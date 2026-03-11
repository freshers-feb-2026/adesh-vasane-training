const express=require("express");

const adminRoutes=require("./Routes/admin");
const shopRoutes=require("./Routes/shop");

const app=express();

app.use(express.urlencoded({extended:false})); //it means we are parsing simple object false 


app.use(adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>
{
    res.status(404).send("<h1>Page not found !");
});


app.listen(4000, () => {
  console.log("Server running on port 4000");
});