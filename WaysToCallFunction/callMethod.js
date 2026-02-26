function add(a,b)
{
    return a+b;
}
    let result=add.call(this,1,2);
    console.log(result);