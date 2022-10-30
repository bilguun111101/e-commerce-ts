const connect = require("./db");
const app = require("./app");
require("dotenv").config();

const port = process.env.PORT || 5000;

connect();

app.listen(port, () => {
    console.log(`Listening you on ${port}`);
})