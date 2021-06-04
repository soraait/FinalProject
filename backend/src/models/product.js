import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    product_id: {
        type: String,
        require: true,
        trim: true
    },
    name : {
        type: String,
        require: true,
        trim: true
    },
    brand : {
        type: String,
        require: true,
        trim: true
    },
    model : {
        type: String,
        require: true,
        trim: true
    },
    serailnumber : {
        type: String,
        require: true,
        trim: true
    },
    imageUrl : {
        type: String,
        require: true,
        trim: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        require: true,
    },
    createdAt : {
        type : Date,
        require : true,
        default : () => Date.now()
    } 
})

const Product = mongoose.model("Product", productSchema)

export default Product