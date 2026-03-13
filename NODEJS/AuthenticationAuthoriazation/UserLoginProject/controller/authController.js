const User=require("../models/userModel");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken"); 
const cookie=require("cookie-parser");

exports.signup=async (req,res,next)=>
{
   try{
    const {name,email,password}=req.body;
     if(!name || !email ||!password)
     {
        return res.status(400).json({
            message:"all filed are required"
        })
     }

     const  existingUser=await User.findOne({email});
  
     if(existingUser)
     {
        return res.status(400).json({
            message:"User Already Exists"
        })
     }
    
     //there are two steps to generate salt one is normal way and the second one is the shortcut way
     /*

     const salt = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(password, salt);

     */
    
    // this is second way in that case it will atomatically get converted into the genSalt(10) → hash(password, salt)

     const hashPassword=await bcrypt.hash(password,10);

     const user=await User.create({
        name,
        email,
        password:hashPassword
     });

      res.status(201).json({
        message:"User Registered Suscessfully",
        user
      })

   }

   catch(error){
       next(error);   //this will call the error middleware in the main app.js folder
   }
}

exports.login=async (req,res,next)=>
{
   try{
        const {email,password}=req.body;

        const user=await User.findOne({email});

        if(!user)
        {
             return res.status(400).json({
           message:"Invalid email or password"
       });
        }

        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch)
        {
            return res.status(400).json({
                message:"Invalid Password"
            })
        }

        const token=jwt.sign(
            
                {id:user._id, role:user.role},    //payload  i.e. data of user
                process.env.JWT_SECRET, //secrete key 
               {expiresIn:"1d"} //signature verification
            
        );

        res.cookie("token",token);

         res.json({
       message:"Login successful",
      token
        });
    }
     catch(error){
   next(error);
 }
}