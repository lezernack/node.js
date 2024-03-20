const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (re1, res) => {
  res.send("Hello World!");
});

app.listen(PORT, console.log(`Test server running on port: ${PORT}`));
