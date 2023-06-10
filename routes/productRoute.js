const express = require("express");
const product_route = express();


const bodyParser = require('body-parser');
product_route.use(bodyParser.json());
product_route.use(bodyParser.urlencoded({extended:true}));



const multer = require("multer");
const path = require("path");

product_route.use(express.static('images'));

const storage = multer.diskStorage({

    //destination where the images are saved
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, '../images/productImages'), function(error, success){
            if(error){
                throw error
            }
        });
    },
    filename: function(req, file, cb){
        const name = Date.now()+'-'+file.originalname;
        cb(null, name, function(error, success){
            if(error){throw error}
        });
    }
});

const upload = multer({storage:storage});


const auth = require("../middleware/auth");

const product_controller = require("../controllers/productController");

product_route.post('/add-product', upload.array('images', 6), auth, function(req, res){
    product_controller.add_product;
});


product_route.get('/read-product', auth, function(req, res){
    product_controller.read_product;
})


product_route.delete('/delete-product', auth, function(req, res){
    product_controller.delete_product;
})


product_route.get('/search-product', auth, function(req, res){
    product_controller.search_product;
})

module.exports = product_route;


