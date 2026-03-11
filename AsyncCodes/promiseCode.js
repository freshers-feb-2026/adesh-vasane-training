//promises were used to fixed the callback hell problem
function step1()
{
    return new Promise((resolve)=>
    {
        setTimeout(()=>
        {
            console.log("step 1 completed");
            resolve("done1");
       },1000 )
    })
}
function step2()
{
    return new Promise((resolve)=>
    {
        setTimeout(()=>
        {
             console.log("step2 completed");
             resolve("done 2");
        },1000)
    })
}

function step3()
{
    return new Promise((resolve)=>
    {
        setTimeout(()=>
        {
            console.log("step3 completed");
            resolve("done 3");
        },1000);
    })
}
step1()
.then((res)=>{
   console.log(res);
   return step2();
})
.then((res)=>{
   console.log(res);
   return step3();
})
.then((res)=>{
   console.log(res);
   console.log("all steps completed");
})