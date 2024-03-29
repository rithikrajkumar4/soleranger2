const ErrorHander = require('../utils/errorhander');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const User = require('../models/userModel');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');


// Register a User
exports.registerUser = catchAsyncErrors( async(req,res,next)=>{
    const {name,email,password} = req.body;
    // res.set('Access-Control-Allow-Origin', '*');
    const user = await User.create({
        name,email,password
    })
    sendToken(user,201,res);
})


// Login a User
exports.loginUser = catchAsyncErrors(async (req,res,next)=>{
    const{email,password} = req.body;

    //checking if Entered both user and password
    if(!email || !password){
        return next(new ErrorHander("Please Enter Both email and password",400))
    }

    const user = await User.findOne({email}).select("+password");

    if(!user){
        return next(new ErrorHander("Invalid email and password",401));
    }

    const isPasswordMatched = await user.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHander("Invalid email and password",401));
    }

    sendToken(user,200,res);

});


// Logout Method

exports.logout = catchAsyncErrors(async (req,res,next)=>{

    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true,
    })

    res.status(200).json({
        success:true,
        message:"Logged Out",
    })
})

// forgot Password
exports.forgotPassword = catchAsyncErrors(async (req,res,next)=>{
    const user = await User.findOne({email:req.body.email});

    if(!user){
        return next(new ErrorHander("User Doesn't Exist ",404));
    }

    //  Get ResetPasswordToken
    const resetToken = user.getResetPasswordToken();
    await user.save({validateBeforeSave:false});

    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;

    const message = `Your Password Reset token is :-\n\n ${resetPasswordUrl} \n\n if you have not requested this email, then please ignore it;`

    try {

        await sendEmail({
            email:user.email,
            subject:"Soleranger Password Recovery Email",
            message,

        });
        res.status(200).json({
            success:true,
            message:`Email sent to ${user.email} successfully`,
        })
        
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({validateBeforeSave:false});

        return next(new ErrorHander(error.message,500));
    }
})


// Reset Password

exports.resetPassword = catchAsyncErrors(async (req,res,next)=>{

    // creating token hash 
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest("hex");

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire:{$gt:Date.now()},
    });

    if(!user){
        return next(new ErrorHander("Reset password is invalid or has been expire ",400));
    }

    if(req.body.password !== req.body.confirmPassword){
        return next(new ErrorHander("Passwor Doen't Match ",400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    sendToken(user,200,res);


});


// Get User Detailed
exports.getUserDetails = catchAsyncErrors( async (req,res,next)=>{

    const user = await User.findById(req.user.id);

    res.status(200).json({
        success:true,
        user,
    });
})

// Update User Password
exports.updatePassword = catchAsyncErrors( async (req,res,next)=>{

    const user = await User.findById(req.user.id).select('+password');

    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

    if(!isPasswordMatched){
        return next(new ErrorHander("Old password is incorrect",400));
    }
    if(req.body.newPassword !== req.body.confirmPassword){
        return next(new ErrorHander("Password Doesn't match",400));
    }

    user.password = req.body.newPassword;

    await user.save();
    
    sendToken(user,200,res);
})

// Update USER Profile
exports.updateProfile = catchAsyncErrors( async (req,res,next)=>{

   const newUserData={
    name:req.body.name,
    email:req.body.email
   }

   // we will add cloudinary here later

   const user = await User.findByIdAndUpdate(req.user.id,newUserData,{
    new:true,
    runValidators:true,
    useFindAndModify:false,
   });

   res.status(200).json({
    success:true,
   })

})

// Get All user -- admin
exports.getAllUser = catchAsyncErrors( async (req,res,next)=>{
    const users = await User.find();
    res.status(200).json({
        success:true,
        users
    })

})
// Get User Details -- admin 
exports.getSingleUser = catchAsyncErrors( async (req,res,next)=>{
    const user = await User.findById(req.params.id);
    if(!user){
        return next(new ErrorHander(`User Doesn't Exist with id ${req.params.id}`,401))
    }
    res.status(200).json({
        success:true,
        user,
    })

})

// Update USER Role -- admin
exports.updateRole = catchAsyncErrors( async (req,res,next)=>{

    const newUserData={
     name:req.body.name,
     email:req.body.email,
     role: req.body.role,
    }
 
    const user = await User.findByIdAndUpdate(req.params.id,newUserData,{
     new:true,
     runValidators:true,
     useFindAndModify:false,
    });
 
    res.status(200).json({
     success:true,
    })
 
})

// Delete USER -- admin
exports.deleteUser = catchAsyncErrors( async (req,res,next)=>{
     

    // we will remove cloudinary here later

    const user = await User.findById(req.params.id);
    if(!user){
        return next(new ErrorHander(`User does not Exist with the id ${req.params.id}`,400))
    }
    
    await user.remove(); 

    res.status(200).json({
     success:true,
     message:"User Deleted Successfully"
    })
 
 })






//  navbar
// products shadow
// instagram 
// name instead of login
// admin select