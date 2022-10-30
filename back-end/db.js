const mongoose = require("mongoose");

require("dotenv").config();

const uri = process.env.MONGO_URL || "";

const connectMongo = async() => {
    const conn = await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log(`connection is successful`);
}

module.exports = connectMongo;