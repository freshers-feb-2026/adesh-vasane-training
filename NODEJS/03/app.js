const http = require("http");

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
       res.write("<h1> form submited </h1>");
       return res.end();
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
