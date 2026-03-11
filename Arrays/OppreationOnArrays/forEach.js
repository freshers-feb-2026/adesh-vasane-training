let arr=[1,2,3,5];
arr.forEach((num,index,array)=>
{
    array[index]=num*2;
})
console.log(arr);
