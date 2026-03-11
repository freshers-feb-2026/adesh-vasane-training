const greet=()=>
{
    console.log("Hello");
}
greet();

const square=x=>
{
    return x*x;
}
console.log(square(10));

const cube=(x)=>
{
    return x*x*x;
}
console.log(cube(10));

//arrow function that return objects

const getUser=()=>({name:"adesh",age:20})
console.log(getUser());

//arrow function with implicit returns
const val=(a,b)=>a*b;
console.log(val(10,20));
