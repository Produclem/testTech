const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const productRoute = require("./routes/productRoute");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', productRoute);

module.exports = app;