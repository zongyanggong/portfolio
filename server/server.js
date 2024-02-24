const express = require("express");
const app = express();
const path = require("path");
const skillValues = require("./skills_value");
const cors = require("cors");

const rootpath = path.join(__dirname, "..");
// app.use(express.static(path.join(rootpath, "portfolio/build")));
app.use(express.static(path.join(rootpath, "demo/dist")));

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.get("/skills", (req, res) => {
  res.json({ skills: skillValues });
});

app.listen(5000, () => {
  console.log("Server start on port 5000");
});
