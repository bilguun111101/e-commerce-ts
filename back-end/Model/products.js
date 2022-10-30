const { Schema, model } = require("mongoose");

const productsSchema = new Schema({
    price: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    }
})

module.exports = model("products", productsSchema);