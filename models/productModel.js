var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
    product_id:{
        type: String,
        required: true
    },
    prodect_name:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true,
        validate: [arrayLimit, "Only 6 images allowed!"]
    }
});

function arrayLimit(val){
    return val.length <=6;
}

module.exports = mongoose.model("Product", productSchema);