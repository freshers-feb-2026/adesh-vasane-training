async function isCheck() {
    try{
        const response=await Promise.resolve({
            json:async function () {
                return{
                    id:1,
                    Name:"adesh-thinkitive",
                    age:21,
                    Place:"pune",
                    title:"Hello There !"
                }

            }
         
        })
           const data=await response.json();
           console.log(data);
    }
    catch(error)
{
    console.log(error);
}
}

isCheck();