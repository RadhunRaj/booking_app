import express = require("express");
import path = require("path");
import bodyParser = require("body-parser");
import patientRoutes from "./src/routes/patientRoutes";


const app = express();
const port = 2000;

app.use(bodyParser.json());

// ✅ Use built-in express.json() instead of body-parser
app.use(express.json());

// ✅ Serve static files correctly
app.use(express.static(path.join(__dirname, "src/views")));

// ✅ Use the correct route prefix
app.use("/api", patientRoutes);

// ✅ Ensure the correct path for index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src/views", "index.html")); // ✅ Ensure "src/views" exists
});

// ✅ Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
