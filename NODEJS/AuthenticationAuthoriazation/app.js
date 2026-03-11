const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken");
app.use(cookieParser());

//working on bcrypt
app.get('/', (req, res) => {
    res.cookie("name", "adesh");

    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash("Hello World", salt, function (err, hash) {
            console.log(hash);
            res.send("Cookie set and hash generated");
        });
    });
});

app.get('/isCheck',(req,res)=>
{
    bcrypt.compare("Hello World","$2b$10$jhazYt.ifHs6Qcv45qhO.uqlPgvGXP8y7cURk.Vl5rozHb3hwb1he",function(err,result)
    {    
        console.log(result);
        res.send("Successfully compare")
    })
})

app.get('/read', (req, res) => {
    console.log(req.cookies);
    res.send("page read");
});

//working on the JWT

app.get("/jwt",function (req,res)
{
    let token =jwt.sign({email:"adeshwasane04@gmail.com",age:21},"secret");
    res.cookie("token",token);
    res.send("done");   
})

app.get("/readjwt",function (req,res)
{
    let data=jwt.verify(req.cookies.token,"secret");
    console.log(data);
})
app.listen(PORT, () => {
    console.log(`Server Running on port : ${PORT}`);
});