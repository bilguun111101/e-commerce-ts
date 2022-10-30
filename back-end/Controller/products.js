const Model = require("../Model/products");


// get data $$$$$$$$$$$$$$$$$$$$$$$$
module.exports.getProductsData = async (req, res) => {
    try {
        const products = await Model.find();
        res.send(products);
    } catch (error) {
        console.log("error of Controller/products.js/getProductsData", error);
    }
}

// add data +++++++++++++++++++++++
module.exports.addProductData = async(req, res) => {
    try {
        const product = await Model(req.body).save();
        res.send(product);
    } catch (error) {
        console.log("error of Controller/products.js/addProductData", error);
    }
}

// delete data -----------------------
module.exports.deleteProductData = async(req, res) => {
    try {
        const products = await Model.findByIdAndDelete(req.params.id);
        res.send(products);
    } catch (error) {
        console.log("error of Controller/products.js/deleteProductData", error);
    }
}

module.exports.getProductData = async(req, res) => {
    const id = req.params.id;
    try {
        const product = await Model.find({ _id: id })
        res.send(product);
    } catch (error) {
        console.log("error of Controller/products.js/getProductData", error);
    }
}