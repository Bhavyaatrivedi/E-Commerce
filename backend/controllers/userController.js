const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");

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
  
    res.status(200).json({
        success:true,
        user,
    })
  });