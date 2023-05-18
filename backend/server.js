require("dotenv").config();
const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//Handling Ucaught exception
process.on("uncaughtException", (err)=>{
  console.log(`Error : ${err.message}`);
  console.log(`Shutting down the server due to Uncaught exception`)
  process.exit(1);
})
//config OF DOTENV
dotenv.config({ path: "backend/config/config.env" });

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successful"))
  .catch((err) => {
    console.log(err);
  });

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});


// unhandles promise rejection
process.on("unhandledRejection", (err)=>{
  console.log(`error: ${err.message}`);
  console.log(`Shutting down the server dur to unhandled Promise rejection`);

  server.close(()=>{
    process.exit(1);
  })
})