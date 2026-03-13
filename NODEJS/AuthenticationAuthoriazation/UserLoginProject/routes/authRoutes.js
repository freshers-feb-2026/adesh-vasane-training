const express=require("express");
const router=express.Router();
const {signup,login}=require("../controller/authController");
const {protect,adminOnly}=require("../middleware/authMiddleware");

router.post("/signup",signup);

router.post("/login",login);

router.get("/profile",protect,(req,res)=>
{
    res.json({
        message:"User Profile Accessed"
    });
});

router.get("/admin",protect,adminOnly,(req,res)=>
{
    res.json({
        message:"Admin Dashboard"
    });
});

module.exports=router;
