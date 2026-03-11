for(var i=0;i<4;i++)
{
    setTimeout(()=>
    {  
         console.log(i);
    },2000);
   
} //3,3,3 beacause has function scope and it will not going to callback again but it will properly
 // works if we declare it outside settimeOut function


for(let i=0;i<4;i++)
{
    setTimeout(()=>
    {
        console.log(i);
    },2000);
}
//here let has block scope so it will perfectly work fine 