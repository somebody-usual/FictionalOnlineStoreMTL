const express = require("express");
const user_route = express();



const bodyParser = require('body-parser');
user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({extended:true}));



const user_controller = require('../controllers/userController');
//For user registeration
user_route.post('/register', user_controller.registerUser);
//For login
user_route.post('/login', user_controller.user_login);



module.exports = user_route;