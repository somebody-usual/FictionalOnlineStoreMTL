const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    product_id:{
        type: String,
        required: true
    },
    product_name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Cart", cartSchema);