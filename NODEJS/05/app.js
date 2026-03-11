const express=require('express');

const app=express();

const adminRoutes=require('./Routes/admin');
const shopRoutes=require('./Routes/shop');

app.use(express.urlencoded({extended:false}));

app.use(adminRoutes);
app.use(shopRoutes);

//Adding 404 status code

app.use((req,res,next)=>
{
    res.status(404).send('<h1>Page not found !</h1>');
})

app.listen(4000);