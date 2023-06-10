const cart = require("../models/cartModel");


const add_to_cart = async(req, res) =>{
    try {
        
        const new_cart = new Cart({
            product_id: req.body.product_id,
            product_name: req.body.product_name,
            price: req.body.price,
            quantity: req.body.quantity
        })

        const cart_data = await new_cart.save();

        res.status(200).send({success:true, msg:"Cart Detail", data:cart_data});

    } catch (error) {
        res.status(400).send({success:false, msg:error.message});
    }
}

module.exports = {add_to_cart}