function outerFunction()
{
   let count=0;
   return function innerFunction()
   {
      return ++count;
   }

}
let ans=outerFunction();
console.log(ans());