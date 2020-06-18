const express = require("express");
const connectDB = require("./connectDB");

const app = express();
const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  connectDB();
  res.send({ result: "connected Successfully" });
});

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
