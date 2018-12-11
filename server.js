const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var http = require("http");
const PORT = 3000;
const api = require("./routes/api");
const app = express();
require("./startup/prod")(app);
app.use(cors());
// var ad = require(Uber)({
//   server_token: "qmDVI8Lx4q63GmTI2TZGY9pf-TJ0S3RZH5yA7qMG",
//   version: "v1"
// });
app.options("*", cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/api", api);

app.get("/", function(req, res) {
  res.send("Helo from server");
});

app.listen(PORT, function() {
  console.log("Server running in local host" + PORT);
});
