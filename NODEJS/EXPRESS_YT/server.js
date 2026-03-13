const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;

// setup static server
app.use(express.static(path.join(__dirname,'Public')));

const posts = [
    {id:1,name:"adesh",place:"pune"},
    {id:2,name:"vansh",place:"World"},
    {id:3,name:"vedika",place:"pune"}
];

app.get('/',(req,res)=>{ 
   res.send({title:"Hello"});
});

app.get('/api/posts',(req,res)=>{
    res.json(posts);
});

app.get('/api/posts/:id',(req,res)=>{
    const id = parseInt(req.params.id);

    res.json(posts.filter((post)=>{
        return post.id == id;
    }));
});

app.listen(port,()=>{
    console.log(`Server Running on port ${port}`);
});