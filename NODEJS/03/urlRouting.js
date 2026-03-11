const http=require('http');
const fs=require('fs');
const data=fs.readFileSync(`${__dirname}/data.json`,'utf-8')
console.log(data);
const dataObj=JSON.parse(data);

const basicServer=http.createServer((req,res)=>
{
    if(req.url==='/')
    {
        res.end("Home Page");
    }
    else if(req.url==='/about')
    {
        res.end("About Page");
    }
    else if(req.url=='/api')
    {
        res.writeHead(200,{
            'content-type':'application/json'
        })
         res.end(dataObj);
    }
    else{
        res.writeHead(404,{
            'content-type':'text/html',
            'my-own-header':'Hello-thinkitive'
        }
        )
        res.end('<html><body><h1>Page not found ! </h1></body></html>')
    }
});
basicServer.listen(3000,()=>
{
    console.log("Server Running on port 3000");
}); 