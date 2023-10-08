const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 80;

const mongoose = require("mongoose");

const DBpass = process.env.DBpass;

const dataSchema = new mongoose.Schema({
  fullName: String,
  branch: String,
  email: String,
  prn: String,
  rollno: String,
});

const data = mongoose.model("data", dataSchema);

mongoose.connect(
  `mongodb+srv://edcviit:${DBpass}@cluster0.koohght.mongodb.net/FirstYearOrientation`
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/submit", async (req, res) => {
  const { name } = req.body;

  console.log(name);
  const newData = new data({
    fullname: name,
    branch: "demo",
    email: "demo",
    prn: "demo",
    rollno: "demo",
  });
  await newData.save();

  res.status(200).send("Registration successful!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
