const obj={
    Name:"Adesh",
    show:function()
    {
        console.log(this.Name);
    }

}
// const func=obj.show;  //here in that the we are storing it in global space so the value is undefined here 
// func();   


 obj.show();   //if we do this so here it will immediately call the show so the value is obj only i.e. Adesh


const obj2={
    Name:"adesh Wasane",
    show:()=>
    {
        console.log(this.Name);   // arrow function always refer to the global window the value is this 
    }
}
obj2.show();