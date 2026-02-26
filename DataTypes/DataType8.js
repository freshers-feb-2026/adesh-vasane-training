        let obj={
            name:"adesh",
            age:"55",
            DemoFunc:function()
            {
                console.log("this is function");
            },
            place:"pune"
        }
         delete obj.place;
        obj.DemoFunc();
        console.log(obj);

       
        
       