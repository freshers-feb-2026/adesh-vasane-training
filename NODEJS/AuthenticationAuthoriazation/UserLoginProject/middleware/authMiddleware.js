const jwt=require("jsonwebtoken");

exports.protect=(req,res,next)=>{
    const token=req.cookies.token;
 

    if(!token)
    {
        res.status(401).json({
            message:"not authorized"
        })
    };
    try{
        const decode=jwt.verify(token,process.env.JWT_SECRET); 
          req.user = decode; 
        next();
    }
     catch(error){
   res.status(401).json({
     message:"Invalid token"
   });
     }
}

exports.adminOnly = (req,res,next)=>{

 if(req.user.role !== "admin"){
   return res.status(403).json({
     message:"Access denied"
   });
 }

 next();

};
