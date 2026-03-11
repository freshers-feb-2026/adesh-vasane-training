const fs = require("fs");

const textIn = fs.readFileSync('./text/text.txt', 'utf-8');

console.log(textIn);

const textOut=`created on ${Date.now()} and the data is : ${textIn} adesh`
fs.writeFile('./text/output.txt', textOut);
console.log("file wirtten !");

