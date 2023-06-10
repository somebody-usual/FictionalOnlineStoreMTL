const pagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;

    return { limit, offset}
};

const db = require("../models");
const products = db.products;

const getPagination = (page, size) => {
    const  limit = size ? +size : 3;
    const offset = page ? page * limit : 0;

    return { limit, offset};
};

exports.findAll = (req, res) => {
    const { page, size, title } = req.query;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    const { limit, offset } = pagination(page, size);

    products.paginate({},  { offset, limit })
        .then(data => {
            res.send({
                totalItems: data.totalDocs,
                products: data.docs,
                totalPages: data.totalPages,
                currentPage: data.page - 1,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving products."
            });
        }
    );
};

