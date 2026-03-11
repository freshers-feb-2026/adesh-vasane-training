const result=new Promise((res,rej)=>
{
    let num=1;
    if(num%2==0) res("number is even");
    else rej("number is odd");
});
result.then((message)=>
{
    console.log(message);
})
.catch((err)=>
{
    console.log("error :",err);
})

// Promise.all() method

Promise.all([
    Promise.resolve("task 1 completed"),
    Promise.resolve("task 2 completed"),
    Promise.resolve("task 3 completed"),
    Promise.resolve("all promises completed successfully")

]).then((result)=>
{
    console.log(result);
}).catch((error)=>
{
    console.log(error);
})


//Promise.allSettled Method
Promise.allSettled([
    Promise.resolve("task1 complted"),
    Promise.reject("task 2 completed"),
    Promise.resolve("task 3 completed"),
    Promise.reject("task 4 completd")
])
.then((res)=>
{
    console.log(res);
})
.catch((error)=>
{
    console.log("error",error)
})

//Promise.race() method

Promise.race([
    new Promise((resolve)=>
    {
        setTimeout(()=>
        {
            resolve("task 1 completed");
        },2000)
    }),
    new Promise((resolve)=>
    {
        setTimeout(()=>
        {
            resolve("task 2 completd");
        },1000);
    }),
    new Promise((resolve)=>
    {
       setTimeout(()=>
         {
            resolve("task 3 completd");
        },2000)
    })
])
.then((result)=>
{
    console.log(result);
})
.catch((err)=>
{
    console.log(err);
})

Promise.any([
    Promise.reject("Task2 failed"),
    
    
    Promise.resolve("Task 3 Completed"),
Promise.resolve("Task1 complted")

])
.then((res)=>
{
    console.log(res);
})
.catch((err)=>
{
    console.log(err);
})
.finally(()=>
{
    console.log("All Tasks executed Successfully");
})