let value=0;
let a=20;
var b=29;
let ans=function (a,b)
{
    value=a+b;
    return value;
}
console.log(ans(a,b));

function say(message)
{
    console.log(message);  //return message 
}
let result=say("hello thikitive");
console.log('result :', result); //here result value is undefined because we are not returning any value 


showMe();

function showMe()
{
    console.log('an hoisted Example');
}