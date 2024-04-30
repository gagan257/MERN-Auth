const express = require("express");
const app = express();

const port = 8000;

const connectDB = require("./db/dbConnection");
const User = require("./db/user");

// Middleware for parsing JSON data
app.use(express.json());

connectDB();

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
