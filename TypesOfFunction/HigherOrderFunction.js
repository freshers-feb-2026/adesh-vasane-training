//the function that return another function as an argument called as higher order 
//function

let str="adesh";
function OuterFunction(str,HFunction)
{
    console.log("hello "+str);
    HFunction();
}
OuterFunction(str, function()
{
    console.log("this is Higher order function")
})

