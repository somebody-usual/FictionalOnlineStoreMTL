const buyProduct = require("../models/buyProductModel");


const buy_product = async(req, res) =>{
    try {
        const buy_product_obj = new BuyProduct({
            product_id: req.body.product_id,
            transaction_id: req.body.transaction_id,
            customer_id: req.body.customer_id
        })

        const buyProductData = await buy_product_obj.save();

        res.status(200).send({success:true, msg:"Buy Product Detail", data:buyProductData});

    } catch (error) {
        res.status(400).send({success:false, msg:error.message});
    }
}

module.exports = {buy_product}