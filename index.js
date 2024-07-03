const express = require("express");
const cors = require("cors");
const router = require("./Router/index");
const app = express();
const bodyParser = require("body-parser");
require("./DBconfig/ConnectionDB");
require("dotenv").config();

const PORT = process.env.PORT || 4545;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CORS middleware
const customCors = (req, res, next) => {
  const allowedOrigins = [
    "http://localhost:4545",
    "https://schedule-lec-front-end.vercel.app",
  ];

  if (allowedOrigins.includes(req.headers.origin)) {
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
  }

  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
};

app.use(customCors);

app.get("/", (req, res) => {
  res.json({
    message: "Hello IDEAMAGIX",
  });
});

app.use("/Schedule/Lecture", router);

app.listen(PORT, () => {
  console.log("Server Running On Port " + PORT);
});
