const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const postRouter = require("./routes/posts");
const app = express();
const router = express.Router();

//! middlewares
// app.use(express.json());
// app.use("/posts", () => {
//   console.log("logging from middleware");
// });
app.use("/posts", postRouter);
//! routes
app.get("/", (req, res) => {
  res.send("hello");
});
// connect to database
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("DB Connected");
});

app.listen(3000);
