let arr=[1,2,3,5];
arr.push(10);
arr.forEach((num,index,array)=>
{
    array[index]=num*2;
})
console.log(arr);


//in forEach we can modify the element in the array
