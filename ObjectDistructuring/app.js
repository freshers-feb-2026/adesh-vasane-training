const user={
    Name:"adesh",
    age:22,
    city:"pune"
}

const{Name,age,city}=user;

console.log(Name);
console.log(age);
console.log(city);





//Object Distruct
let test={a:10};
let temp={...test};

const {a}=temp;
console.log(a);
console.log(temp.a);