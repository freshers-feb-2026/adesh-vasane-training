var name="thikitive";
var age=20;
var place ="pune";

function isgetData(getName,getAge,getPlace)
{
    return(
        'name is '+getName+ " age is :"+getAge+ "  from :"+getPlace
    )
}
console.log(isgetData(name,age,place));

var age=20;
age=30;
console.log(age);  //it will execute successfully here 

let time=20;
time=30;
console.log(time);  //in that case it will give us a syntax error

const hobbies=['sports','cooking'];
                                       
hobbies.push('travelling');
hobbies.map((data)=>  //we can push inside the constant it means it is constant in 
                      // memory but we can add and remove elements inside the constanst
{ 
    console.log(data);
});


function fetchData(callback)
{   
    let promise=new Promise((res,rej)=>
    {
        setTimeout(()=>
    {
        res("done! ");
        callback();
    },1000)
    })
    return promise;
}
function findData()
{
    console.log("this is Data");

}
fetchData(findData).then((result)=>{
    console.log(result);
});

const num=20;
num=30;
console.log(num);