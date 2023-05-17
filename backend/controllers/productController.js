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
exports.getAllProducts =async(req,res) =>{

    const products = await Product.find();

    res.status(200).json({
        success:true,
        product
    })
}

//Update Product.. Admin
exports.updateProduct = async(req,res,next) =>{
    let product = await Product.findById(res.params.id);
    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators:true,
        useFindAndModify:false
    });
    res.status(200).json({
        success:true,
        product
    })
}
