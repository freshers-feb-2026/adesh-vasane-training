require("dotenv").config;

const express=require("express");
const cookieParser=require("cookie-parser");
const connectDB=require("./config/db");
const authRoutes=require("./routes/authRoutes");
const errorHandler=require("./middleware/errorMiddleware");


const app=express();
connectDB();

app.use(express.json()) //This middleware parses JSON data from incoming requests.

app.use(cookieParser());

app.use("/api/auth",authRoutes);


app.use(errorHandler);


app.listen(process.env.PORT,()=>{
 console.log("Server running");
});