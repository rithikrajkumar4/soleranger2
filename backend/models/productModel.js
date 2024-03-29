const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Product Name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Please Enter Product Description"]
    },
    price:{
        type:Number,
        required:[true,"Please Enter The Price"],
        maxLength:[9,"Price Can exceeds 9 characters"],
    },
    images:String,
    brand:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    stock:[{
        // type:Number,
        // required:[true,"Please Enter Product Stock"],
        // maxLength:[4,"max 9999"],
        // default:1
        key:{
            type:String,
            required:[true,"Enter Size"]
        },
        value:{
            type:Number,
            maxLength:[4,"max 9999"],
            default:1
        }
    }],
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
    

})

module.exports = mongoose.model("Product",productSchema);