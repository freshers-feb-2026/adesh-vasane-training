const path=require ('path');
const rootDir=require("../Utils/path");
const Product=require("../Models/product");

exports.getAddProduct=((req,res,next)=>
{
    res.sendFile(path.join(rootDir, "Views", "admin.html"));

})
exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.addProduct);
  product.save();
  res.redirect("/");
};