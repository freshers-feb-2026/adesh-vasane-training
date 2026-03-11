// this is Symbol indetifier that is use to create unique identity
// symbol is a key its not a string so that why we are using [] to access key
const salary = Symbol("salary");

let employee = {
  name: "John",
  [salary]: 50000 //[] we use to access key inside that and if we use normal salary then it will consider variable
};

console.log(employee[salary]); 
