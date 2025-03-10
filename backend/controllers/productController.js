const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorHander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");


// Get All Products

exports.getAllProducts = catchAsyncErrors(async (req,res) => {

    const products = await Product.find();

    res.status(200).json({
        success : true,
        products
    });

});

//Create Product -- admin

exports.createProduct = catchAsyncErrors(async(req,res,next) => {

    const product = await Product.create(req.body);
    res.status(201).json({

            success:true,
            message: "product created successfully",
            product     
    })

});

//Update Products -- admin only

exports.updateProduct = catchAsyncErrors(async(req,res,next) => {

    let product = await Product.findById(req.params.id);

    if(!product) {
        return next(new ErrorHander("Product not found", 404));
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        useFindAndModify:false 
    });

    res.status(200).json({
        success:true,
        message: "Product updated Successfully",
        product    
    })

});

//Delete Product -- admin only 

exports.deleteProduct = catchAsyncErrors(async (req,res,next) => {

    const product = await Product.findById(req.params.id);

    if(!product) {
        return next(new ErrorHander("Product not found", 404));
    }
    
    await product.deleteOne();
    
    res.status(200).json({
        success: true,
        message: "Product Deleted"
    })
});

// Get product details 

exports.getProductDetails = catchAsyncErrors(async (req,res,next) => {

    const product = await Product.findById(req.params.id);

    if(!product) {
        return next(new ErrorHander("Product not found", 404));
    }
        res.status(200).json({
            success: true,
            product
        });

});