function greet(name,callback)
{
    console.log(name+" Thinkitive");
    callback();
}
function Bye()
{
    console.log("Good Morning");
}

greet("adesh", Bye);

//callback in function to handling operations

function calc(a,b,callback)
{
    return callback(a,b);

}
function Sum(a,b)
{
    return a+b;
}
function Mul(a,b){
    return a*b;
}
let result=calc(10,20,Sum);
console.log(result);
console.log(calc(10,20,Mul));

// callBack in event Listner
/*document.getElementById("myButton").addEventListener("click",function()
{
    console.log("button Click");
})
*/

//callBack in API call

function getData(callback)
{
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response)=>response.json())
    .then((data)=>callback(data))
    .catch((err)=>  console.log("error :",err));
}

function printData(data)
{
    console.log("data : ",data);
}
getData(printData);


//example of call back hell

function step1(callback)
{
   setTimeout(()=>
{
    console.log("step1 completed");
    callback();
},1000)
}

function step2(callback)
{
    setTimeout(()=>
    {
        console.log("step2 completed");
          callback();
    },1000);
  
}

function step3(callback)
{
    setTimeout(()=>
    {
        console.log("step 3 completed");
          callback();
    },1000);
  
}

step1(()=>
{   
    console.log("done 1");
    step2(()=>
    {
         console.log("done 2");
        step3(()=>
        {
           console.log("all steps completed");
        })
    })
})