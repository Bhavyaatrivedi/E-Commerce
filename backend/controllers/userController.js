const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken")

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    
  
    const { name, email, password } = req.body;
  
    const user = await User.create({
      name,
      email,
      password,
      avatar: {
        public_id: "this is sample",
        url: "prfileurl",
      },
    });

    sendToken(user,200,res);
  });

  //Login user
  exports.loginUser = catchAsyncErrors (async(req,res,next)=>{
    const {email,password} = req.body;
    
    //check user has given email and pasword both
    if(!email || !password){
      return next(new ErrorHandler("Please Enter Email & password"), 400);
    }

    const user = await User.findOne({email}).select("+passwword");

    if(!user){
      return next(new ErrorHandler("Invalid email or password"))

    }
    const isPasswordMatched = user.comparePassword(password);

    if(!isPasswordMatched){
      return next(new ErrorHandler ("Invalid email or password"), 401)
    }
    
    sendToken(user,200,res);

});

//Logout user
exports.logout = catchAsyncErrors(async(req,res,next)=>{

  req.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  })
  res.status(200).json({
    success:true,
    message:"Logges Out"
  })
})