const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name : {
        type:String,
        required : [true,"Please Enter product name"],
        trim : true
    },

    description : {
        type:String,
        required : [true,"Please Enter Product Description"]
    },

    price: {
        type:Number,
        required : [true,"Please Enter Product Description"],
        maxLength :[8, "Price cannot exceed 8 characters"]
    },

    rating: {
        type: Number,
        deafault: 0
    },

    images: [
            {
            public_Id :{
                type: String,
                required:true
            },

            url : {
                type: String,
                required:true
            }
        }
    ],

    category : {
        type:String,
        required: true
    },

    Stock : {
        type:Number,
        required:[true, "Please Enter Product stock"],
        maxLength:[4,"Stock cannot exceed 4 characters"],
        default:1
    },

    numOfReviews : {
        type:Number,
        default:0
    },

    reviews : [
            {
                name:{
                    type : String,
                    required: true
                },
                rating:{
                    type : Number,
                    required: true
                },
                comment:{
                    type : String,
                    required: true
                }

        }
    ],

    createdAt : {
        type: Date,
        default: Date.now
    }


})

module.exports = mongoose.model("Product",productSchema);