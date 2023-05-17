const express = require("express");
const dotenv = require("dotenv");
const app = require("./app");
const connectDatabase= require("./config/database")

//connect to  database
connectDatabase()
dotenv.config({ path: "backend/config/config.env" });


app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});


