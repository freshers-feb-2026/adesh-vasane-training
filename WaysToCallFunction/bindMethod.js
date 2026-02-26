let person={
    name:"adesh"
}
function greet(age)
{
    console.log(this.name + " " +age)
}
let boundFunction = greet.bind(person, 22);

boundFunction(); 

Math.random();
Math.floor(4.7);
Math.ceil(4.1);
Math.round(4.5);
Math.max(1,2,3);