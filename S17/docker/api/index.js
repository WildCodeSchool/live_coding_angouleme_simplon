const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("hello youssef est faché");
});
app.listen(3005, () => {
  console.log(" Server on port 3005");
});
