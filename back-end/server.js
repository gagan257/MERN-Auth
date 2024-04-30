const express = require("express");
const app = express();

const port = 8000;

const connectDB = require("./db/dbConnection");
const User = require("./db/user");

// Middleware for parsing JSON data
app.use(express.json());

// Register a new user
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    const user = new User({ username, password });
    await user.save();
    res.status(201).send("User registered successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error registering user");
  }
});

// Login
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).send("Invalid credentials");
    }
    if (user.password !== password) {
      return res.status(400).send("Invalid credentials");
    }
    res.status(200).send("Logged in successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error logging in");
  }
});
connectDB();

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
