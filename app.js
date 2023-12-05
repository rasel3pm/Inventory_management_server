const express = require("express");
const router = require("./src/routes/api");
const mongoose = require("mongoose");
const app = new express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const cors = require("cors");
//Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(cookieParser());
//Body perser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//Rate Limiter
const limiter = rateLimit({ windowMs: 15 * 60 * 100, max: 3000 });
app.use(limiter);

//mongodb Connection
let URL =
"mongodb+srv://<username>:<password>@cluster0.ctapjxw.mongodb.net/Inventory-manegment"
let option = { user: "mdraselkibria11", pass: "mZjGDgPKFSd9JfYY", autoIndex: true };

mongoose
  .connect(URL, option)
  .then((res) => {
    console.log("Database Connect");
  })
  .catch((err) => {
    console.log(err);
  });

// Managing BackEnd API Routing
app.use("/api/v1", router);

app.get("*", function (res, res) {
  res.status(404).json({ message: "Page Not Found" });
});

module.exports = app;
