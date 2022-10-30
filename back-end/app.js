const products = require("./Routes/products");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", products);

module.exports = app;