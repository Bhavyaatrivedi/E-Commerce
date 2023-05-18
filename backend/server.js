// require("dotenv").config();
// const express = require("express");
// // const dotenv = require("dotenv");
// const app = require("./app");
// const connectDatabase= require("./config/database")

// //connect to  database
// connectDatabase()
// // dotenv.config({ path: "backend/config/config.env" });


// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on http://localhost:${process.env.PORT}`);
// });



require("dotenv").config();
const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// const connectDB = require("./config/connect");

//config OF DOTENV
dotenv.config({ path: "backend/config/config.env" });

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successful"))
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

