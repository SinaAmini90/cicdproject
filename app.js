const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("CI CD Project Done!!!");
});

app.listen(port, () => {
  console.log(`Simple Express app listening at http://localhost:${port}`);
});
