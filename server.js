const express = require("express");
const app = express();
const port = process.env.PORT || 80;

require("dotenv").config();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/submit", async (req, res) => {
  const { name } = req.body;

  console.log(name);

  res.status(200).send("Registration successful!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
