const Product = require("../modals/productModal")



//Create Product ..Admin

exports.createProduct = async(req,res,next)=>{
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}

//Get all Product
exports.getAllProducts = (req,res) =>{
    res.status(200).json({message:"route is working"})
}