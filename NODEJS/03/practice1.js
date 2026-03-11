const http=require('http');

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
});
basicServer.listen(3000);