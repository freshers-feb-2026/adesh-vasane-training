const bodyParser = require("body-parser");
const express=require("express");
const app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.use('/add-product',(req,res,next)=>
{
    res.send('<html><body><form action="/product" method="POST"><input type="text" name="title" /><button type="submit"></button></form></body></html>')
});
app.use('/products',(req,res,next)=>
{
    console.log(req.body);
    res.redirect('/');
});
app.use('/',(req,res,next)=>
{
    res.send("hello from express JS")
})    