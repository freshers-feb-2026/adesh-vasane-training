// Q. Why there is a need of arrow function?
// ans: arrow function provide clean and morden syntax and the main problem with while 
// working with the this keyword arrow function is directly store into window so it will take 
// only value from the window and it helps while working with the callbacks


const obj={
    name:"adesh",
    greet:function()
    {
        setTimeout(function() //callback function
    { 
        console.log(this.name);  //here this will take value of object
    },1000);

    }
}

obj.greet(); //here output: undefined

const obj2={
    name:"adesh",
    greet:function ()
    {
        setTimeout(()=>
        {
            console.log(this.name);
        },2000)  // here it is also a arrow function but it get store into a global scope and 
            // this arrow function is here going to find the value in obj

       
    }
}
obj2.greet();