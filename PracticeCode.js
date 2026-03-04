let obj={
    x:20,
}
let obj2={...obj}
obj2.x=30;
let {x}=obj;

console.log(obj2.x);//30
console.log(obj.x);//20
console.log(x);


