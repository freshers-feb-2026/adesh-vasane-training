const path=require("path");
const rootDir=require("../Utils/path");
const Product=require("../Models/product");

exports.getProducts=((req,res,next)=>
{
    const products=Product.fetchAll();
    console.log(products);

    res.sendFile(path.join(rootDir,'Views','shop.html'));
})