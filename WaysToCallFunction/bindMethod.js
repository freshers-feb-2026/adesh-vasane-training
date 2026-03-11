let person={
    name:"adesh"
}
function greet(age)
{
    console.log(this.name + " " +age)
}
let boundFunction = greet.bind(person, 22);

boundFunction(); 

