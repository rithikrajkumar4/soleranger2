const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require('jsonwebtoken')
const User = require('../models/userModel');


exports.isAuthenticatedUser = catchAsyncErrors(async (req,res,next)=>{

    const {token} = req.cookies;
    
    if(!token){
        return next(new ErrorHander("Please Login to access this resource",401))
    }
    try{
    const decodedData = jwt.verify(token,process.env.JWT_SECRET);

    req.user = await User.findById(decodedData.id);

    next();
    }
    catch(e){
        console.log(e);
        return next(new ErrorHander("Authorization fail",401));
    }

}) 

exports.isAdmin = (...roles)=>{
    return(req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return next(new ErrorHander(`role:${req.user.role} is not allowed to  access this resource`,403 ));
        }

        next();
    }
}


