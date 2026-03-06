const http = require("http");
const fs=require("fs");
const firstServer = http.createServer((req, res) => {
  console.log(req.method, req.url, req.statusCode);

  // process.exit();
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");    
    res.write(
      '<form action="/message" method="POST"><input type="text" name="message" placeholder="message"/><button type="submit">submit</button></form>',
    );

    res.write("</body>");
    res.write("</html>");
    return res.end();

  }

  if(url==='/message' && req.method==='POST')
  {
      //This is the strem code 
       const body=[];
       req.on('data',(chunk)=>
      {
        console.log(chunk);
        body.push(chunk);
      })

      //This is Buffer code
    
      return req.on("end",()=>
      {
          const parseBuffer=Buffer.concat(body).toString();
          console.log(parseBuffer);
          const message=parseBuffer.split('=')[1]
          fs.writeFileSync("message.txt",message);
            res.statusCode=302;
           res.setHeader('location','/');
            return res.end();
      });
      
    
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<body>");
  res.write("<h1>this is my nodejs page </h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

firstServer.listen(3000);


/*
  two ways to using node module system
     module.exports=funName;
    const declartionname=require('./funName');

    //export multiple things together

     module.exports={
      handler:functionName1,
      handler2:functionName2
     }

*/