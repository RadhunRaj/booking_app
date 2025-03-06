"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var patientRoutes_1 = require("./src/routes/patientRoutes");
var app = express();
var port = 2000;
app.use(bodyParser.json());
// ✅ Use built-in express.json() instead of body-parser
app.use(express.json());
// ✅ Serve static files correctly
app.use(express.static(path.join(__dirname, "src/views")));
// ✅ Use the correct route prefix
app.use("/api", patientRoutes_1.default);
// ✅ Ensure the correct path for index.html
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "src/views", "index.html")); // ✅ Ensure "src/views" exists
});
// ✅ Start server
app.listen(port, function () {
    console.log("Server running on http://localhost:".concat(port));
});
