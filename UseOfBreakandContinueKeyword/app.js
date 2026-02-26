    
    //here Outer is called as labelling and that is useful when we
    //nested loops to break loops in that case we can use that labelling

    let ans=[10,20,30,40];
    let count=0;
    Outer:for(let i of ans)
    {   
         Inner:for(let j of ans)
         {
            if(j==30)
            {
                console.log("hello");
                break Outer
            }
         }
    }