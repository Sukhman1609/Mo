const { addProduct, UpdatePrice, Find, FindSalary, FindExp, FindGrad, Delete } = require("../controller/product");

const categoryroute=require ("express").Router();
categoryroute.post("/addProduct",addProduct)
categoryroute.put("/updateProduct",UpdatePrice)
categoryroute.post("/find",Find)
categoryroute.post("/findSalary",FindSalary)
categoryroute.post("/findExp",FindExp)
categoryroute.delete("/delete",Delete)

module.exports=categoryroute;