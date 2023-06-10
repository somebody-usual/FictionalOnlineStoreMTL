const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Somebody_usual:bgFoiH6oAFJxmxri@cluster0.vlbtsxt.mongodb.net/");

// user routes
const user_routes = require('./routes/userRoute');
app.use('/api', user_routes);

//product route
const product_routes = require("./routes/productRoute");
app.use('/api', product_routes);

//cart route
const cart_routes = require("./routes/cartRoute");
app.use('/api', cart_routes);

//buyProduct route
const buy_product_route = require("./routes/buyProductRoute");
app.use('/api', buy_product_route);



app.listen(3000, function(){
   console.log('server is running!') 
});