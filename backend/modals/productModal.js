const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please enter product name"],
        trim: true
    },
    description:{
        type:String,
        required: [true, "Please enter product description"]
    }, 
    price:{
        type:Number,
        required:[true,"Please enter product price"],
        maxLength:[8,"Price cannot exceed 8 characters"]
    },
    rating:{
        typr: Number,
        default:0
    },
    images:[
        {
            public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }}

    ],
    category:{
        type: String,
        requuired:[true, "Please enter Product category"],
    },
    Stock:{
        type:Number,
        required:[true, "Please enter product stock"],
        maxLength:[4, "Stock cannot exceed 4 charcters"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true,
            },
            rating:{
                type:Number,
                required:true,
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Product", productSchema);