const express = require("express");
const errorMiddleware = require("./middleware/error");
const app = express();

app.use(express.json())

//route imports
const product = require("./routes/productRoute");

//middleware for error
app.use(errorMiddleware)

app.use("/api/v1", product);
module.exports = app;